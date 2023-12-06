import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models";
import { cartProducts } from "../data/cartProducts";

interface TestState {
    cartProducts: IProduct[];
    subtotal: number;
    cartCounter: number;
}
const initialState: TestState = {
    cartProducts: cartProducts,
    subtotal: 0,
    cartCounter: 0,
};
const sliceCart = createSlice({
    name: "test",
    initialState,
    reducers: {
        addToCart(state, action) {
            const actionProduct = action.payload.product;
            const isProductInCart = state.cartProducts.some(
                (cartProduct) => cartProduct.id === actionProduct.id
            );

            if (!isProductInCart) {
                state.cartProducts.push(actionProduct);
                state.cartCounter += 1;
            }
            state.subtotal = state.cartProducts.reduce(
                (acc, product) => acc + product.price,
                0
            );
        },
        removeFromCart(state, action) {
            const actionProduct = action.payload.product;
            state.cartProducts = state.cartProducts.filter(
                (product) => product.id !== actionProduct.id
            );
            state.subtotal -= action.payload.totalPrice;
            state.cartCounter -= 1;
        },
        updateSubtotal(state, action) {
            if (action.payload.increment) {
                state.subtotal += action.payload.product.price;
            } else {
                state.subtotal -= action.payload.product.price;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateSubtotal } = sliceCart.actions;

export default sliceCart.reducer;
