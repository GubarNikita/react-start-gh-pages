import { IProduct } from "../models";
import { products } from "./products";

const currentProducts: IProduct[] = products;

export const filterProductsByBrand = (brandName: string) => {
    const filteredProducts = products.filter(
        (product) => product.brand === brandName
    );
    currentProducts.length = 0;
    currentProducts.push(...filteredProducts);
    console.log(brandName);
};

export const getFilteredProducts = () => {
    return currentProducts;
};
