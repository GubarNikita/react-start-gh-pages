import React from "react";

import { ProductList } from "../components/product";
import { BrandList } from "../components/brands";

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
                            <BrandList />
                        </div>
                    </div>
                    <div className="main-catalog">
                        <div className="main-catalog__title">
                            <h2>Catalog</h2>
                        </div>
                        <div className="main-catalog__list">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
