import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        productSlice: productSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>