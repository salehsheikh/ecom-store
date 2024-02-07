import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    {
      to: "/cart",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6   "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {totalQuantity > 0 && (
            <span className="relative -top-8 -right-3 bg-[#222] text-white rounded-full w-4 h-4 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
          <nav className="flex justify-between items-center max-container h-20">
            <Link to="/" className="text-3xl font-bold">
              Logo
            </Link>
            <ul className="flex-1 flex justify-center items-center gap-16 max-sm:hidden">
              {navLinks.map((item) => (
                <li key={`${item.to}-${item.label}`}>
                  <Link
                    to={item.to}
                    className="hover:text-indigo-500 transition duration-300 ease-in-out  hover:underline relative"
                  >
                    {item.label}
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex hover:text-indigo-500 transition duration-300 ease-in-out  hover:underline max-lg:hidden mr-24">
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                     strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl" />
            </div>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="static top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <ul className=" lg:hidden flex flex-col items-center justify-center h-auto overflow-auto ">
              {navLinks.map((item) => (
                <li key={`${item.to}-${item.label}`}>
                  <Link
                    to={item.to}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                    {item.icon}
                  
                    
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
