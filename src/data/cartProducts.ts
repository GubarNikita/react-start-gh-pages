import { IProduct } from "../models";

let cartProducts: IProduct[] = [];

export const addToCart = (product: IProduct) => {
    const isProductInCart = cartProducts.some(
        (cartProduct) => cartProduct.id === product.id
    );

    if (!isProductInCart) {
        cartProducts = [...cartProducts, product];
    }

    return cartProducts;
};

export const getCartProducts = () => {
    return cartProducts;
};
