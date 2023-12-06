import React, { useState } from "react";
import { IProduct } from "../models";
// import { addToCart } from "../data/cartProducts";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart } from "../store/SliceCart";

interface ProductsProps {
    product: IProduct;
}

const Product = ({ product }: ProductsProps) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const dispatch = useAppDispatch();

    const buttonAddToCart = () => {
        dispatch(addToCart({ product }));
        setIsAddedToCart(true);
    };

    return (
        <div key={product.id} className="catalog__item">
            <div className="catalog__item-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="catalog__item-name">{product.title}</div>
            <div className="catalog__item-brand">{product.brand}</div>
            <div className="catalog__item-price">${product.price}</div>
            <button
                className="catalog__item-button"
                onClick={buttonAddToCart}
                disabled={isAddedToCart}
            >
                {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
        </div>
    );
};

export function ProductList() {
    const products = useAppSelector((state) => state.shop.products);

    return (
        <>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}
