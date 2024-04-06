// checkoutSlice.js

import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    orderDetails: [],
    shippingInfo: {
      // Add shipping-related fields as needed
      name: '',
      address: '',
      // ...
    },
    // Add other checkout-related state here
  },
  reducers: {
    addOrderDetails: (state, action) => {
      const orderDetails = action.payload;
      state.orderDetails = orderDetails;
    },
    updateShippingInfo: (state, action) => {
      const newShippingInfo = action.payload;
      state.shippingInfo = newShippingInfo;
    },
    // Add other checkout-related actions here
  },
});

export const { addOrderDetails, updateShippingInfo } = checkoutSlice.actions;
export default checkoutSlice.reducer;
