import React from "react";
import { IProduct } from "../models";

interface ProductsProps {
    cartProducts: IProduct[];
}

export function CartProduct({ cartProducts }: ProductsProps) {
    // cart__item-counter

    const Subtotal = () => {
        const subtotal = document.querySelector(
            ".cart__subtotal"
        ) as HTMLDivElement;
        const colTotalPrice = document.querySelectorAll(
            ".cart__item-totalPrice"
        );

        let sum = 0;

        colTotalPrice.forEach((item) => {
            if (item.textContent) {
                const priceText = item.textContent;
                const priceInt = parseInt(priceText.replace("$", ""));
                if (!isNaN(priceInt)) {
                    sum += priceInt;
                }
            }
        });

        subtotal.textContent = `Subtotal: $${sum.toString()}`;
    };
    const CounterMines = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedButton = event.target as HTMLButtonElement;
        const parDiv = clickedButton.closest(".cart__item-container");

        const counterCart = parDiv?.querySelector(
            ".cart__item-counter__val"
        ) as HTMLInputElement;

        const totalPriceItem = parDiv?.querySelector(
            ".cart__item-totalPrice"
        ) as HTMLDivElement;
        const priceItem = parDiv?.querySelector(
            ".cart__item-price"
        ) as HTMLDivElement;

        let value = parseInt(counterCart.value);
        if (value > 1) {
            value--;
            counterCart.value = value.toString();

            let priceText = priceItem.textContent;

            if (priceText) {
                let priceInt = parseInt(priceText.replace("$", ""));
                let priceValue = priceInt * value;
                totalPriceItem.textContent = `$${priceValue.toString()}`;
            }
            Subtotal();
        }
    };

    const CounterPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedButton = event.target as HTMLButtonElement;
        const parDiv = clickedButton.closest(".cart__item-container");

        const counterCart = parDiv?.querySelector(
            ".cart__item-counter__val"
        ) as HTMLInputElement;

        const totalPriceItem = parDiv?.querySelector(
            ".cart__item-totalPrice"
        ) as HTMLDivElement;
        const priceItem = parDiv?.querySelector(
            ".cart__item-price"
        ) as HTMLDivElement;

        let value = parseInt(counterCart.value);
        value++;
        counterCart.value = value.toString();

        let priceText = priceItem.textContent;

        if (priceText) {
            let priceInt = parseInt(priceText.replace("$", ""));
            let priceValue = priceInt * value;
            totalPriceItem.textContent = `$${priceValue.toString()}`;
        }
        Subtotal();
    };

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
                            <button id="incrementButton" onClick={CounterPlus}>
                                Увеличить
                            </button>
                            <button id="decrementButton" onClick={CounterMines}>
                                Уменьшить
                            </button>
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
