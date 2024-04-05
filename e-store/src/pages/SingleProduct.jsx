import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, } from 'react-router-dom';
import { addToCart } from '../Slices/cartSlice';
import { Vortex } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        quantity,
      })
    );
    toast.success(`${product.title} has been added to the cart`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    // Redirect to the cart page after adding to cart
    // navigate('/cart');
    
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      {product ? (
        <div className="flex flex-col sm:flex-row">
          <img
            className="mb-4 sm:mr-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            src={isHovered ? product.images[2] : product.thumbnail}
            alt={product.title}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="mb-4">{product.description}</p>
            <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-700 mb-2">In Stock: {product.stock}</p>

            <div className="flex space-x-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-2">{quantity}</span>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <p className="mt-4">
              Total Price: ${product.price * quantity}
            </p>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-full mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button><ToastContainer/>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
        <Vortex
          visible={true}
          height="160"
          width="160"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
      )}
    </div>
  );
};

export default SingleProduct;
