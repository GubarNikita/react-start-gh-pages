import React, { useState } from "react";
import { IProduct } from "../models";
import { getCartProducts, removeFromCart } from "../data/cartProducts";

interface ProductsProps {
    cartProduct: IProduct;
    subtotal: number;
    setSubtotal: (newTotalPrice: number) => void;
}

const CartProduct = ({ cartProduct, subtotal, setSubtotal }: ProductsProps) => {
    const [counterValue, setCounterValue] = useState(1);
    const [totalPrice, setTotalPrice] = useState(cartProduct.price);

    const handleIncrement = () => {
        setCounterValue(counterValue + 1);
        const newTotalPrice = totalPrice + cartProduct.price;
        setTotalPrice(newTotalPrice);
        setSubtotal(subtotal + cartProduct.price);
    };

    const handleDecrement = () => {
        if (counterValue > 1) {
            setCounterValue(counterValue - 1);
            const newTotalPrice = totalPrice - cartProduct.price;
            setTotalPrice(newTotalPrice);
            setSubtotal(subtotal - cartProduct.price);
        }
    };

    const handleRemove = () => {
        removeFromCart(cartProduct.id);
        setSubtotal(subtotal - totalPrice);
    };

    return (
        <>
            <div key={cartProduct.id} className="cart__item">
                <div className="cart__item-container">
                    <div className="cart__item-element">
                        <div>
                            <img src={cartProduct.image} alt="" />
                        </div>
                        <div className="cart__item-brand">
                            {cartProduct.brand}
                        </div>
                        <div className="cart__item-name">
                            {cartProduct.title}
                        </div>
                    </div>
                    <div className="cart__item-price">${cartProduct.price}</div>
                    <div className="cart__item-counter">
                        <input
                            type="text"
                            className="cart__item-counter__val"
                            min={1}
                            value={counterValue}
                            max={10}
                            disabled
                        />
                        <button onClick={handleIncrement} id="incrementButton">
                            Увеличить
                        </button>
                        <button onClick={handleDecrement} id="decrementButton">
                            Уменьшить
                        </button>
                    </div>
                    <div className="cart__item-totalPrice">${totalPrice}</div>
                    <button
                        className="cart__button-delete"
                        onClick={handleRemove}
                    >
                        del
                    </button>
                </div>
                <hr />
            </div>
        </>
    );
};

export function CartComponent() {
    let CartProducts = getCartProducts();
    const [subtotal, setSubtotal] = useState(
        CartProducts.reduce((acc, product) => acc + product.price, 0)
    );

    return (
        <>
            {CartProducts.map((product) => (
                <CartProduct
                    key={product.id}
                    cartProduct={product}
                    subtotal={subtotal}
                    setSubtotal={setSubtotal}
                />
            ))}
            <div className="cart__subtotal">Итого: ${subtotal}</div>
        </>
    );
}
