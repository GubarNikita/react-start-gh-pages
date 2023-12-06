import { createSlice } from "@reduxjs/toolkit";
import { IBrand, IProduct } from "../models";
import { brands } from "../data/brands";
import { products } from "../data/products";

interface TestState {
    brands: IBrand[];
    products: IProduct[];
    selectedBrand: string | null;
}
const initialState: TestState = {
    brands: brands,
    products: products,
    selectedBrand: null,
};
const sortProducts = createSlice({
    name: "test",
    initialState,
    reducers: {
        filterProducts(state, action) {
            const selectedBrand = action.payload.brand.title;

            // Проверка на повторное нажатие на тот же бренд
            if (state.selectedBrand === selectedBrand) {
                // Сбросить фильтр и отобразить все товары
                state.products = products;
                state.selectedBrand = null;
            } else {
                const filteredProducts = products.filter(
                    (product) => product.brand === selectedBrand
                );

                state.products = filteredProducts;
                state.selectedBrand = selectedBrand;
            }
        },
    },
});

export const { filterProducts } = sortProducts.actions;

export default sortProducts.reducer;
