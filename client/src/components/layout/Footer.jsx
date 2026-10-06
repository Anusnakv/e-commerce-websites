import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            ShopHub
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Discover premium products from trusted sellers.
            Shop with confidence and enjoy a modern shopping
            experience.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gray-700 flex items-center justify-center duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Shop
          </h3>

          <ul className="space-y-3">
            <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
            <li><Link to="/">New Arrivals</Link></li>
            <li><Link to="/">Best Sellers</Link></li>
            <li><Link to="/">Deals</Link></li>
            <li><Link to="/">Categories</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Press</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Support
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">Help Center</Link></li>
            <li><Link to="/">Returns</Link></li>
            <li><Link to="/">Shipping</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive offers and latest product updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500"
          />

          <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold text-white duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 ShopHub. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Accessibility</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;