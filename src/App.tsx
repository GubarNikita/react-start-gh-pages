import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
