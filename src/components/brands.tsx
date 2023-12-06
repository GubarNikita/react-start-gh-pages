import React, { useState } from "react";
import { IBrand } from "../models";
import { brands } from "../data/brands";
import { useAppDispatch } from "../hooks";
import { filterProducts } from "../store/SliceSortProducts";

export function BrandList() {
    const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(null);
    const dispatch = useAppDispatch();

    const handleBrandClick = (brand: IBrand) => {
        setSelectedBrand((prevSelectedBrand) =>
            prevSelectedBrand === brand ? null : brand
        );
        dispatch(filterProducts({ brand }));
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
