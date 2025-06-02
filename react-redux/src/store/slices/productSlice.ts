import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Product {
    id: number,
    name: string,
    price: number
}

interface ProductState {
    products: Product[]
}

export const initialState: ProductState = {
    products: [{
        id: 1,
        name: "product1",
        price: 500
    }]
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const selectProducts = (state: RootState) => {
    return state.productSlice.products;
}

export const { storeProducts } = productSlice.actions;

export default productSlice.reducer;