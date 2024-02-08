import React from "react";
import { BsTruck } from "react-icons/bs";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
    <div className="container mx-auto mt-10 mb-10">
    <div className="text-center text-2xl font-semibold text-gray-700 mb-12">Trending this week</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <Link to="/products" className="hover:underline">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] transform hover:scale-105 transition duration-300 ease-in-out">
        
          <div className="relative h-full">
          
            <img
              src="https://img.freepik.com/free-vector/abstract-sales-landing-page-with-photo_23-2148373932.jpg?size=626&ext=jpg&ga=GA1.1.2003098129.1703697760&semt=ais"
              alt="Card 1"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
          {/* Add other content or components here */}
        </div></Link>
       
        {/* Card 2 */}
        <Link to="/products" className="hover:underline">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="relative h-full">
            <img
         src="https://images.pexels.com/photos/19891679/pexels-photo-19891679/free-photo-of-model-photography.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
          {/* Add other content or components here */}
        </div></Link>

        {/* Card 3 */}
        <Link to="/products" className="hover:underline">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="relative h-full">
            <img
        src=" https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
          {/* Add other content or components here */}
        </div></Link>

        {/* Card 4 */}
        <Link to="/products" className="hover:underline">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] transform hover:scale-105 transition duration-300 ease-in-out" >
          <div className="relative h-full">
            <img
        src=" https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
          {/* Add other content or components here */}
        </div>
        </Link>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 h-auto sm:h-40 items-center justify-center bg-black mx-4 sm:mx-6 lg:mx-8 text-sm font-medium text-white">

<span className="text-center">
  <BsTruck className="w-10 h-10 mx-auto mb-2 sm:mb-0"/>
  <br />
  Free Shipping <br/>
  On all orders over 1399.
</span>

<span className="text-center">
  <BsPhoneVibrateFill className="w-10 h-10 mx-auto mb-2 sm:mb-0"/>
  <br />
  Give Us A Call <br/>
  (+92) 031-81546330
</span>

<span className="text-center">
  <TiMessages className="w-10 h-10 mx-auto mb-2 sm:mb-0"/>
  <br />
 Delivery <br/>
  information.
</span>

<span className="text-center">
  <MdOutlineMailOutline className="w-10 h-10 mx-auto mb-2 sm:mb-0"/>
  <br />
  Email us on <br/>
   salehsheikh786@gmail.com.
</span>

</div>

 
  </>
  );
};

export default HeroSection;
