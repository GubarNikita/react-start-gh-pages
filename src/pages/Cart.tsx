import React from "react";
import { CartComponent } from "../components/cartProducts";

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
                    <CartComponent />
                    <button className="cart__checkout">Checkout</button>
                </div>
            </div>
        </>
    );
}
