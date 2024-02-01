import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../Slices/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity(productId, newQuantity));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover mr-4" />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-indigo-500 hover:text-indigo-700"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-gray-700"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-gray-700">Quantity: {item.quantity}</span>
                    <button
                      className="text-gray-700"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">Total Price: ${calculateTotalPrice()}</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
