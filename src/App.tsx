import React from "react";
import { Product } from "./components/product";
import { Brand } from "./components/brands";
import { CartProduct } from "./components/cartProducts";
import { GoCart } from "./components/goCart";
import { GoMain } from "./components/goMain";

import "./App.css";

import logo from "./images/logo.png";
import shoppingCart from "./images/shopping-cart.png";

import { brands } from "./data/brands";
import { products } from "./data/products";
import { cartProducts } from "./data/cartProducts";

function App() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <button onClick={GoMain}>
                            <img
                                className="header-logo__img"
                                src={logo}
                                alt=""
                            />
                            <h1 className="header-logo__title">STRIO</h1>
                        </button>
                    </div>
                    <div className="header-cart">
                        <button onClick={GoCart}>
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
            <main className="main ">
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
            <div className="cart-container hidden">
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
                    <CartProduct cartProducts={cartProducts} />
                    <button className="cart__checkout">Checkout</button>
                </div>
            </div>
            <footer className="footer"></footer>
        </>
    );
}
export default App;
