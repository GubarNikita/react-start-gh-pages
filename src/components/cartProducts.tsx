import React from "react";
import { IProduct } from "../models";

interface ProductsProps {
    cartProducts: IProduct[];
}

export function CartProduct({ cartProducts }: ProductsProps) {
    return (
        <>
            {cartProducts.map((product) => (
                <div key={product.id} className="cart__item">
                    <div className="cart__item-container">
                        <div className="cart__item-element">
                            <div>
                                <img src={product.image} alt="" />
                            </div>
                            <div className="cart__item-brand">
                                {product.brand}
                            </div>
                            <div className="cart__item-name">
                                {product.title}
                            </div>
                        </div>
                        <div className="cart__item-price">${product.price}</div>
                        <div className="cart__item-counter">
                            <input
                                type="text"
                                className="cart__item-counter__val"
                                min={1}
                                value="1"
                                max={10}
                                disabled
                            />
                            <button id="incrementButton">Увеличить</button>
                            <button id="decrementButton">Уменьшить</button>
                        </div>
                        <div className="cart__item-totalPrice">
                            ${product.price}
                        </div>
                        <button className="cart__button-delete">del</button>
                    </div>
                    <hr />
                </div>
            ))}
            <div className="cart__subtotal">Subtotal: $</div>
        </>
    );
}
