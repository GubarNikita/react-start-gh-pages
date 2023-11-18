import React, { useState } from "react";
import { IProduct } from "../models";
import { addToCart } from "../data/cartProducts";
import { getFilteredProducts } from "../data/currentProducts";

interface ProductsProps {
    product: IProduct;
}

const Product = ({ product }: ProductsProps) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const buttonAddToCart = () => {
        addToCart(product);
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
    let productsData = getFilteredProducts();
    console.log(productsData);

    return (
        <>
            {productsData.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}
