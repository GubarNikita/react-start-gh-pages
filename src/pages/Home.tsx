import React from "react";

import { YourComponent } from "../components/product";
import { Brand } from "../components/brands";

import { brands } from "../data/brands";

export function Home() {
    return (
        <>
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
                            <YourComponent />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
