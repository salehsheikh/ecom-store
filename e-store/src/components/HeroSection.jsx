import React from "react";
import { BsTruck } from "react-icons/bs";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
const HeroSection = () => {
  return (
    <>
    <div className="container mx-auto mt-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] hover:opacity-70 transition-opacity">
          <div className="relative h-full">
            <img
              src="https://img.freepik.com/free-vector/abstract-sales-landing-page-with-photo_23-2148373932.jpg?size=626&ext=jpg&ga=GA1.1.2003098129.1703697760&semt=ais"
              alt="Card 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">Card 1</h2>
            </div>
          </div>
          {/* Add other content or components here */}
        </div>
       
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] hover:opacity-70 transition-opacity">
          <div className="relative h-full">
            <img
         src="https://images.pexels.com/photos/19891679/pexels-photo-19891679/free-photo-of-model-photography.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">Card 1</h2>
            </div>
          </div>
          {/* Add other content or components here */}
        </div>

        {/* Card 3 */}
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px]  hover:opacity-70 transition-opacity">
          <div className="relative h-full">
            <img
        src=" https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">Card 1</h2>
            </div>
          </div>
          {/* Add other content or components here */}
        </div>

        {/* Card 4 */}
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[350px] hover:opacity-70 transition-opacity" >
          <div className="relative h-full">
            <img
        src=" https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">Card 1</h2>
            </div>
          </div>
          {/* Add other content or components here */}
        </div>
      </div>
    </div>
    <div className="flex gap-20 h-40 items-center justify-center bg-black mx-4 text-sm font-medium text-white sm:mx-6 lg:mx-8">
    <span> <BsTruck  className="w-10 h-10"/>
    <br />
    Free Shipping <br/>
    On all orders over 1399.</span>
    <span> <BsPhoneVibrateFill  className="w-10 h-10"/>
    <br />
    Give Us A Call
 <br/>
 (+92) 041-8818705</span>
    <span> <TiMessages  className="w-10 h-10"/>
    <br />
    Free Shipping <br/>
    On all orders over 1399.</span>
    <span > <MdOutlineMailOutline  className="w-10 h-10"/>
    <br />
    Free Shipping <br/>
    On all orders over 1399.</span>
   
  </div>
 
  </>
  );
};

export default HeroSection;
