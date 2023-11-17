import React, { useState } from "react";
import { IProduct } from "../models";
import { addToCart } from "../data/cartProducts";
import { productsData } from "../data/products";

interface ProductsProps {
    product: IProduct;
}

const Product = ({ product }: ProductsProps) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const buttonAddToCart = () => {
        let cartProducts: IProduct[] = addToCart(product);
        console.log(cartProducts);

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

export function YourComponent() {
    return (
        <>
            {productsData.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}
