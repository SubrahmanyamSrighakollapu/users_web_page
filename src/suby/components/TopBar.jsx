import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const TopBar = () => {
  // ⬇️ Use Redux to get cart items from the store
  const cartItems = useSelector((state) => state.cartProducts.items);

  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [cartItems.length]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 sm:px-10 lg:px-24 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 sm:h-20" />
      </Link>

      {/* Hamburger for mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Nav links - Desktop */}
      <nav className="hidden lg:flex gap-15 items-center">
        <Link
          to="/"
          className="text-gray-800 font-medium hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-800 font-medium hover:text-orange-500"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 font-medium hover:text-orange-500"
        >
          Contact Us
        </Link>
        <Link
          to="/cart"
          className="relative flex items-center gap-2 text-gray-800 font-medium hover:text-orange-500"
        >
          <FaShoppingCart className="text-orange-500 text-xl" />
          Cart
          <span
            className={`absolute -top-2 -right-3 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-full shadow ${
              animate ? "animate-ping-short" : ""
            }`}
          >
            {cartItems.length}
          </span>
        </Link>
      </nav>

      {/* Nav links - Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-4 lg:hidden">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-800 font-medium hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-gray-800 font-medium hover:text-orange-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-gray-800 font-medium hover:text-orange-500"
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            onClick={toggleMenu}
            className="relative flex items-center gap-2 text-gray-800 font-medium hover:text-orange-500"
          >
            <FaShoppingCart className="text-orange-500 text-xl" />
            Cart
            <span
              className={`absolute -top-2 -right-3 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-full shadow ${
                animate ? "animate-ping-short" : ""
              }`}
            >
              {cartItems.length}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default TopBar;
