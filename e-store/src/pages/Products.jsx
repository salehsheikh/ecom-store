import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData, apiError } from '../Slices/productSlice';

const API = 'https://dummyjson.com/products?limit=100';

const fetchProducts = async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data.products;
};

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading, isError } = useQuery('products', () =>
    fetchProducts()
  );

  const [visibleProducts, setVisibleProducts] = useState(50);

  useEffect(() => {
    if (products) {
      dispatch(setApiData(products));
    } else {
      dispatch(apiError());
    }
  }, [dispatch, products]);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 50);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  console.log('total no of products', products.length);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 text-2xl font-bold text-gray-800">Featured Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <figure className="relative">
          <img
            src={product.thumbnail}
            alt={ product.title}
            className="w-full h-56 object-cover object-center"
            onError={(e) => console.error("Error loading image:", e.target.src, e.target.alt, e.target.error)}
          />
          <figcaption className="absolute top-0 left-0 bg-indigo-500 text-white p-2 text-sm font-semibold">
            {product.category}
          </figcaption>
        </figure>
            <h2 className="text-lg font-semibold text-center">{product.title}</h2>
            <p className="text-gray-500 text-center">Rs:{product.price*280}</p>
            <button
               className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-4 ml-20"
              onClick={() => {
                // Add your add to cart logic here
                console.log(`Product ${product.title} added to cart`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center mt-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded-full"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
