import React, { useState } from "react";
import { IBrand } from "../models";

interface BrandProps {
    brands: IBrand[];
}

export function Brand({ brands }: BrandProps) {
    const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(null);

    const handleBrandClick = (brand: IBrand) => {
        setSelectedBrand((prev) => (prev === brand ? null : brand));
    };

    const brandClassName = (brand: IBrand) => {
        return `brands-list__item ${selectedBrand === brand ? "selected" : ""}`;
    };

    const filterProducts = (brand: IBrand) => {
        const elements = document.getElementsByClassName("catalog__item");
        if (selectedBrand === brand) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("hidden");
            }
        } else {
            for (let i = 0; i < elements.length; i++) {
                const itemBrand = elements[i].querySelector(
                    ".catalog__item-brand"
                )?.textContent;
                if (itemBrand !== brand.title) {
                    elements[i].classList.add("hidden");
                } else {
                    elements[i].classList.remove("hidden");
                }
            }
        }
    };

    return (
        <>
            {brands.map((brand) => (
                <button
                    key={brand.id}
                    onClick={() => {
                        handleBrandClick(brand);
                        filterProducts(brand);
                    }}
                    className={brandClassName(brand)}
                >
                    {brand.title}
                </button>
            ))}
        </>
    );
}
