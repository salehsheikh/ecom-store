import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "#about-us", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "#contact-us", label: "Contact Us" },
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
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
              <Link to="/">Sign in</Link>
              <span>/</span>
              <Link to="/">Explore now</Link>
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
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
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
