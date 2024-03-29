import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setApiData, apiError } from '../Slices/productSlice';
import { Link } from 'react-router-dom';
import Star from '../components/Star';
import { Vortex } from 'react-loader-spinner';
import Checkbox from './Checkbox';

const API = 'https://dummyjson.com/products?limit=100';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(24);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedCategories, setSelectedCategories] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      dispatch(setApiData(products));
    } else {
      dispatch(apiError());
    }
  }, [dispatch, products]);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 24);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handlePriceRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = products
    ? products.filter(
        (product) =>
          (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
          product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      )
    : [];

  if (isLoading) {
    return (
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
    );
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row">
      {/* Filters on the left */}
    <div className="w-full lg:w-[300px] p-4 shadow-md max-h-[400px] lg:ml-4">
      <div>
        <label className="block text-gray-600">Search :</label>
        <input
          type="text"
          className="border p-2 w-full rounded-full"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div>
        <label className="block text-gray-600">Categories:</label>
        <div className="space-y-2">
          <Checkbox
            label="Smartphones"
            checked={selectedCategories.includes('smartphones')}
            onChange={() => handleCategoryChange('smartphones')}
          />
          <Checkbox
            label="Women's Dresses"
            checked={selectedCategories.includes('womens-dresses')}
            onChange={() => handleCategoryChange('womens-dresses')}
          />
          <Checkbox
            label="Men's Shirts"
            checked={selectedCategories.includes('mens-shirts')}
            onChange={() => handleCategoryChange('mens-shirts')}
          />
          <Checkbox
            label="Laptops"
            checked={selectedCategories.includes('laptops')}
            onChange={() => handleCategoryChange('laptops')}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Price Range:</label>
        <input
          type="range"
          min="0"
          max="1500"
          step="10"
          value={priceRange[1]}
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <span className="block text-right">${priceRange[1]}</span>
      </div>
    </div>
    {/* Product grid on the right */}
    <div className="flex-3 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md relative"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <Link to={`/products/${product.id}`}>
              <figure className="relative">
                <img
                  src={hoveredProductId === product.id ? product.images[2 || 1] : product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-cover object-center"
                />
                {product.discountPercentage > 0 && (
                  <figcaption className="absolute top-0 left-0 bg-red-500 text-white p-2 text-sm font-semibold">
                    {` Flat ${product.discountPercentage}% Off`}
                  </figcaption>
                )}
              </figure>
              <h2 className="text-lg font-semibold text-center">{product.title}</h2>
              <p className="text-gray-500 text-center">${product.price}</p>
              <Star stars={product.rating} className='content-center' />
            </Link>
          </div>
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-full"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  
    
  </div>
  
  );
};

export default Products;
