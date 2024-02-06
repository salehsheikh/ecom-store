// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice'
const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    checkout:checkoutReducer,
  },
});

export default Store;
