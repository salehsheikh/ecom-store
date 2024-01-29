import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
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
    // Check if the increased quantity exceeds the product stock
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

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      {product ? (
        <div className="flex">
         <img
  className="mr-8 w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
  src={isHovered ? product.images[2] : product.thumbnail}
  alt={product.title}
  onMouseEnter={handleImageHover}
  onMouseLeave={handleImageLeave}
/>

          <div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="mb-4">{product.description}</p>
            <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
            <div className="flex space-x-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-2">{quantity}</span>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-1"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <p className="mt-4">
              Total Price: ${product.price * quantity}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
