import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData, apiError } from '../Slices/productSlice'; 
import Product from './Product';

const FeatureProducts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.products.isLoading);
  const featureProducts = useSelector((state) => state.products.featureProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API call or use axios to fetch data
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        dispatch(setApiData(data.products));
      } catch (error) {
        dispatch(apiError());
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center text-4xl font-bold text-gray-800 mb-8">Check Now!</div>
        <div className="text-center text-2xl font-semibold text-gray-700 mb-12">Our Featured Products</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featureProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
