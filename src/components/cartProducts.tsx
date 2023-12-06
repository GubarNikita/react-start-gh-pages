import React, { useState } from "react";
import { IProduct } from "../models";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removeFromCart, updateSubtotal } from "../store/SliceCart";

interface ProductsProps {
    cartProduct: IProduct;
}

const CartProduct = ({ cartProduct }: ProductsProps) => {
    const [counterValue, setCounterValue] = useState(1);
    const [totalPrice, setTotalPrice] = useState(cartProduct.price);
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        setCounterValue((prev) => prev + 1);
        setTotalPrice((prev) => prev + cartProduct.price);

        dispatch(updateSubtotal({ product: cartProduct, increment: true }));
    };

    const handleDecrement = () => {
        if (counterValue > 1) {
            setCounterValue((prev) => prev - 1);
            setTotalPrice((prev) => prev - cartProduct.price);
            dispatch(
                updateSubtotal({ product: cartProduct, increment: false })
            );
        }
    };

    const handleRemove = () => {
        dispatch(
            removeFromCart({ product: cartProduct, totalPrice: totalPrice })
        );
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
    const cartProducts = useAppSelector((state) => state.cart.cartProducts);
    const subtotal = useAppSelector((state) => state.cart.subtotal);
    return (
        <>
            {cartProducts.map((product) => (
                <CartProduct key={product.id} cartProduct={product} />
            ))}
            <div className="cart__subtotal">Итого: ${subtotal}</div>
        </>
    );
}
