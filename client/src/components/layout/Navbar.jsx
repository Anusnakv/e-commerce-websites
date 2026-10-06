import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          ShopHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/shop" className="hover:text-indigo-600">
            Shop
          </Link>

          <Link to="/cart" className="hover:text-indigo-600">
            Cart
          </Link>

          <Link to="/login" className="hover:text-indigo-600">
            Login
          </Link>
          <Link to="/register" className="hover:text-indigo-600">
           Register
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-indigo-600"
          >
            <FaShoppingCart size={20} />

            {cartCount > 0 && (
              <span
                className="absolute -top-3 -right-3 bg-red-500
                           text-white text-xs font-bold
                           w-5 h-5 rounded-full
                           flex items-center justify-center"
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
         <Link to="/account" className="hover:text-indigo-600">
          <FaUser size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-5 flex flex-col gap-4">

          <Link
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
          >
            Cart ({cartCount})
          </Link>

         <Link to="/login" onClick={() => setOpen(false)}>
           Login
          </Link>

         <Link to="/register" onClick={() => setOpen(false)}>
          Register
         </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;