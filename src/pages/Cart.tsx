import React from "react";
import { CartProduct } from "../components/cartProducts";
import { getCartProducts } from "../data/cartProducts";

export function Cart() {
    return (
        <>
            <div className="cart-container">
                <div className="cart__title">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="cart__subtitle">
                    <span className="subtitle__item">Item</span>
                    <span className="subtitle__item">Price</span>
                    <span className="subtitle__item">Qty</span>
                    <span className="subtitle__item">Total</span>
                </div>
                <div className="cart__list">
                    <CartProduct cartProducts={getCartProducts()} />
                    <button className="cart__checkout">Checkout</button>
                </div>
            </div>
        </>
    );
}
