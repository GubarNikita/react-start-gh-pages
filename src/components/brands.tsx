import React, { useState } from "react";
import { IBrand } from "../models";
import { brands } from "../data/brands";
import { filterProductsByBrand } from "../data/currentProducts";

export function BrandList() {
    const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(null);

    const handleBrandClick = (brand: IBrand) => {
        setSelectedBrand((prevSelectedBrand) =>
            prevSelectedBrand === brand ? null : brand
        );
        filterProductsByBrand(brand.title);
    };

    return (
        <>
            {brands.map((brand) => (
                <button
                    key={brand.id}
                    onClick={() => handleBrandClick(brand)}
                    className={`brands-list__item ${
                        selectedBrand === brand ? "selected" : ""
                    }`}
                >
                    {brand.title}
                </button>
            ))}
        </>
    );
}
