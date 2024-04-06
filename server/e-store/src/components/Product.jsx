import React from 'react';
import { NavLink } from 'react-router-dom';
import Star from './Star';

const Product = ({ id, title, thumbnail, price, discountPercentage,rating }) => {
  // Use the first available image or a default image URL


  console.log('Product ID:', id);
 

  return (
    <NavLink to={`/products/${id}`}>
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <figure className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-56 object-cover object-center"
            onError={(e) => console.error("Error loading image:", e.target.src, e.target.alt, e.target.error)}
          />
          <figcaption className="absolute top-0 left-0 bg-red-500 text-white p-2 text-sm font-semibold">
            {` Flat ${discountPercentage} Off`}
          </figcaption>
        </figure>

        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">${price}</p>

          {/* Add to Cart Button */}
          <Star stars={rating} className='content-center' />
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
