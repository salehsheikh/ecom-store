// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  },
  reducers: {
    setApiData: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      // Assuming feature products are the first 5 items
      state.featureProducts = action.payload.slice(4, 12);
    },
    apiError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setApiData, apiError } = productSlice.actions;
export default productSlice.reducer;
