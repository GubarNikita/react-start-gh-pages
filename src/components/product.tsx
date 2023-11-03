import React from "react";
import { IProduct } from "../models";

interface ProductsProps {
    products: IProduct[];
}

export function Product({ products }: ProductsProps) {
    const Back = () => {};

    const Counter = () => {
        const counterCart = document.querySelector(".header-cart__counter");
        if (counterCart) {
            let divText = counterCart.textContent;
            if (divText) {
                let value = parseInt(divText, 10) + 1;
                counterCart.textContent = value.toString();
            }
        }
    };

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="catalog__item">
                    <div className="catalog__item-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="catalog__item-name">{product.title}</div>
                    <div className="catalog__item-brand">{product.brand}</div>
                    <div className="catalog__item-price">${product.price}</div>
                    <button
                        className="catalog__item-button"
                        onClick={() => {
                            Back();
                            Counter();
                        }}
                    >
                        Add cart
                    </button>
                </div>
            ))}
        </>
    );
}
