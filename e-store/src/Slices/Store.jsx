// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default Store;
