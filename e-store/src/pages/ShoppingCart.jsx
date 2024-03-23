import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../Slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import {loadStripe} from '@stripe/stripe-js';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Ensure the new quantity is within a valid range (greater than 0)
    newQuantity = Math.max(1, newQuantity);

    dispatch(updateCartItemQuantity({ id: productId, quantity: newQuantity }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  
  const makePayment = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        handlePayment();
      } else {
        navigate("/login");
      }
    });
  };
  
  const handlePayment = async () => {
    // payment integration
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PBKEY);
  
    const body = {
      products: cartItems
    };
  
    const headers = {
      "Content-Type": "application/json"
    };
  
    try {
      const response = await fetch("http://localhost:7000/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
  
      const session = await response.json();
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
  
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };
  
 
  return (
    
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-300 py-2"
            >
              {item.images && item.images.length > 0 && (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
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
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="text-gray-700">
                      Quantity: {item.quantity}
                    </span>
                    <button
                      className="text-gray-700"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total Price: ${calculateTotalPrice()}
            </p>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-4"
              onClick={makePayment}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
