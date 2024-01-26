import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#222] pt-16 pb-32 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Categories</h4>
            <ul>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Women</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Men</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Shoes</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Watches</a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Help</h4>
            <ul>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Track Order</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Returns</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">Shipping</a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-900 transition duration-300">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">GET IN TOUCH</h4>
            <p className="text-[#666666] text-lg leading-7">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="pt-6">
              <a href="#" className="text-2xl text-white hover:text-gray-900 transition duration-300 m-1">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-white hover:text-gray-900 transition duration-300 m-1">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl text-white hover:text-gray-900 transition duration-300 m-1">
                <i className="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-3/12 pb-10">
            <h4 className="text-2xl font-bold text-white pb-6">Newsletter</h4>
            <form>
              <div className="relative pb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                  className="bg-gray-100 pl-4 pr-10 py-2 w-50 text-white focus:outline-none focus:border-white border border-gray-300 rounded"
                />
                <button className="bg-indigo-500 text-white px-6 py-2 rounded-full mt-4 ml-20">
            Subscribe
          </button>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-16 flex flex-wrap">
          <div className="flex justify-center w-full md:w-1/2 lg:w-2/3">
            <div className="flex items-center space-x-4">
              <a href="#" className="m-1">
                <img src="data:image/png;base64,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" alt="ICON-PAY" className='w-10'/>
              </a>
              <a href="#" className="m-1">
                <img src="data:image/png;base64,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" alt="ICON-PAY" className='w-10' />
              </a>
              <a href="#" className="m-1">
                <img src="data:image/png;base64,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" alt="ICON-PAY" className='w-10'/>
              </a>
             
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 text-center">
            <p className="text-[#666666]">
              
              Copyright ©2024 All rights reserved | This template is made with
              <i className="fa fa-heart-o text-red-500" aria-hidden="true"></i> by
              <a href="#" target="_blank" className="text-white hover:text-gray-900 transition duration-300">
               Saleh 
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
