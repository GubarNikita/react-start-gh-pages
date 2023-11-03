import React from "react";
import { Product } from "./components/product";
import { Brand } from "./components/brands";

import "./App.css";

import logo from "./images/logo.png";
import shoppingCart from "./images/shopping-cart.png";
import tShirt from "./images/T-shirt.jpg";

import { brands } from "./data/brands";
import { products } from "./data/products";

function App() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <img className="header-logo__img" src={logo} alt="" />
                        <h1 className="header-logo__title">STRIO</h1>
                    </div>
                    <div className="header-cart">
                        <button>
                            <div className="header-cart__counter">0</div>
                            <img
                                className="header-cart__img"
                                src={shoppingCart}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
                <hr className="header-line" />
            </header>
            <main className="main hidden">
                <div className="main-container">
                    <div className="main-brands">
                        <div className="main-brands__title">
                            <h3>Brands</h3>
                        </div>
                        <div className="main-brands-list">
                            <Brand brands={brands} />
                        </div>
                    </div>
                    <div className="main-catalog">
                        <div className="main-catalog__title">
                            <h2>Catalog</h2>
                        </div>
                        <div className="main-catalog__list">
                            <Product products={products} />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
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
                        <div className="cart__item">
                            <div className="cart__item-container">
                                <div className="cart__item-element">
                                    <div>
                                        <img src={tShirt} alt="" />
                                    </div>
                                    <div className="cart__item-brand">
                                        Brand
                                    </div>
                                    <div className="cart__item-name">
                                        Item name
                                    </div>
                                </div>
                                <div className="cart__item-price">$56</div>
                                <div className="cart__item-counter">
                                    <input
                                        type="number"
                                        className="cart__item-counter__val"
                                        value={1}
                                    />
                                </div>
                                <div className="cart__item-totalPrice">$56</div>
                                <button className="cart__button-delete">
                                    del
                                </button>
                            </div>
                            <hr />
                        </div>
                        <div className="cart__subtotal">Subtotal: $355</div>
                        <button className="cart__checkout">Checkout</button>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default App;
