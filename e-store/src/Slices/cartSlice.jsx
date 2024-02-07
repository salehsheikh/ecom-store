import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity, images, stock } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity,
          images, // Include the images property
          stock, // Include the stock property
        });
      }

      // Update total quantity
      state.totalQuantity += quantity;
    },
    // Update the updateCartItemQuantity reducer in the cartSlice.js file

updateCartItemQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  const existingItem = state.items.find((item) => item.id === id);

  if (existingItem) {
    // Update total quantity
    state.totalQuantity += quantity - existingItem.quantity;

    // Update quantity of the corresponding cart item
    existingItem.quantity = quantity;
  }
},

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);

      if (itemToRemove) {
        // Update total quantity
        state.totalQuantity -= itemToRemove.quantity;
      }

      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      // Clear total quantity
      state.totalQuantity = 0;

      state.items = [];
    },
  },
});

export const { addToCart, updateCartItemQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
