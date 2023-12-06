import { configureStore } from "@reduxjs/toolkit";
import sortProducts from "./SliceSortProducts";
import sliceCart from "./SliceCart";

const store = configureStore({
    reducer: {
        shop: sortProducts,
        cart: sliceCart,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
