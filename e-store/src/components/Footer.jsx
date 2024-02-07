import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const notify = () => toast("subscribed successfully");
  return (
    <footer className="bg-[#222] pt-10 pb-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Categories</h4>
            <ul>
              <li className="pb-4">
                <Link to="/products" className="text-white hover:text-[#666666] transition duration-300">Women</Link>
              </li>
              <li className="pb-4">
                <Link to="/products" className="text-white hover:text-[#666666] transition duration-300">Men</Link>
              </li>
              <li className="pb-4">
                <Link to="/products" className="text-white hover:text-[#666666] transition duration-300">Shoes</Link>
              </li>
              <li className="pb-4">
                <Link to="/products" className="text-white hover:text-[#666666] transition duration-300">Watches</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Help</h4>
            <ul>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-[#666666] transition duration-300">Track Order</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-[#666666] transition duration-300">Returns</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-[#666666] transition duration-300">Shipping</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-[#666666] transition duration-300">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">GET IN TOUCH</h4>
            <p className="text-white hover:text-[#666666] transition duration-300">
              Any questions? Let us know in store at 8th floor, 13B gulshan St, karachi,Khi  or call us on (+92) 31 8154 6330
            </p>
            <div className="pt-6">
              <a href="#" className="text-2xl text-white hover:text-[#666666] transition duration-300 m-1">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-white hover:text-[#666666] transition duration-300 m-1">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl text-white hover:text-[#666666] transition duration-300 m-1">
                <i className="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Newsletter</h4>
            <form>
              <div className="relative pb-4">
                <input
                  type="email"
                  name="email"
                  required="required"
                  placeholder="email@example.com"
                  className="bg-gray-100 pl-4 pr-10 py-2 w-50 text-white focus:outline-none focus:border-white border border-gray-300 rounded"
                />
                <button className="bg-indigo-500 hover:bg-indigo-700 transition duration-300 text-white px-6 py-2 rounded-full mt-4 ml-20" onClick={notify}>
            Subscribe
          </button>
<ToastContainer/>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8  flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 text-center">
            <p className="text-white hover:text-[#666666] transition duration-300">
              
              Copyright ©2024 All rights reserved | This template is made 
              by 
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer " className='text-white'>
              saleh
            </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
