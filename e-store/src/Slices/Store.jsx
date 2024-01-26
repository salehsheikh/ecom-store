// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const Store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default Store;
