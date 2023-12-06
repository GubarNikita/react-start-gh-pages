import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import shoppingCart from "../images/shopping-cart.png";
import { useAppSelector } from "../hooks";

export const NavBar = () => {
    const cartCounter = useAppSelector((state) => state.cart.cartCounter);
    return (
        <Navbar expand="md">
            <Container>
                <Nav>
                    <header className="header">
                        <div className="header-container">
                            <div className="header-logo">
                                <button>
                                    <Link to="/">
                                        <img
                                            className="header-logo__img"
                                            src={logo}
                                            alt=""
                                        />
                                        <h1 className="header-logo__title">
                                            STRIO
                                        </h1>
                                    </Link>
                                </button>
                            </div>
                            <div className="header-cart">
                                <button>
                                    <Link to="/cart">
                                        <div className="header-cart__counter">
                                            {cartCounter}
                                        </div>
                                        <img
                                            className="header-cart__img"
                                            src={shoppingCart}
                                            alt=""
                                        />
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <hr className="header-line" />
                    </header>
                </Nav>
            </Container>
        </Navbar>
    );
};
