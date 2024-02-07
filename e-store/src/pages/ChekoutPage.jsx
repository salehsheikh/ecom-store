import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addOrderDetails, updateShippingInfo } from "../Slices/checkoutSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutPage = () => {
  const location = useLocation();
  const cartItems = location.state.cartItems || [];
  const dispatch = useDispatch();
  const shippingInfoFromState = useSelector(
    (state) => state.checkout.shippingInfo
  );

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const [shippingInfo, setShippingInfo] = useState({
    fullName: shippingInfoFromState.fullName || "",
    address: shippingInfoFromState.address || "",
    city: shippingInfoFromState.city || "",
    zipCode: shippingInfoFromState.zipCode || "",
    phone:shippingInfoFromState.phone || "",
    email: shippingInfoFromState.email || "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleConfirmAndPay = () => {
    // Check if any required field is empty
    if (
      !shippingInfo.fullName ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.zipCode ||
      !shippingInfo.email ||
      !shippingInfo.phone
    ) {
      toast.warning("Please fill in all required fields.");
      return;
    }
    // Dispatch actions to update Redux store with order details and shipping information
    dispatch(addOrderDetails(cartItems));
    dispatch(updateShippingInfo(shippingInfo));

    // Handle the payment logic and shipping information
    console.log("Confirming and paying:", cartItems, shippingInfo);
    toast.success("the order is placed successfully ")
    // Redirect or perform further actions as needed
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 ">Cash on Delivery</h2>
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
                <p className="text-gray-700">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">
              sub total: ${calculateTotalPrice()}
            </p>

            {/* Shipping Information Form */}
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Zip Code */}
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                 Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Add more form fields for address, city, zip code, email, etc. as needed */}

              {/* Submit Button */}
              <div className="col-span-2 flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleConfirmAndPay}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-4 "
                >
                 place order 
                </button>
                <ToastContainer/>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
