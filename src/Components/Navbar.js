import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={LOGO} alt="logo hai" className="h-10" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/store" className="mr-5 hover:text-gray-900 cursor-pointer">Store</Link>
          <Link to="/mac" className="mr-5 hover:text-gray-900 cursor-pointer">Mac</Link>
          <Link to="/ipad" className="mr-5 hover:text-gray-900 cursor-pointer">iPad</Link>
          <Link to="/iphone" className="mr-5 hover:text-gray-900 cursor-pointer">iPhone</Link>
          <Link to="/watch" className="mr-5 hover:text-gray-900 cursor-pointer">Watch</Link>
          <Link to="/vision" className="mr-5 hover:text-gray-900 cursor-pointer">Vision</Link>
          <Link to="/airpods" className="mr-5 hover:text-gray-900 cursor-pointer">AirPods</Link>
          <Link to="/tv-home" className="mr-5 hover:text-gray-900 cursor-pointer">TV & Home</Link>
          <Link to="/entertainment" className="mr-5 hover:text-gray-900 cursor-pointer">Entertainment</Link>
          <Link to="/support" className="mr-5 hover:text-gray-900 cursor-pointer">Support</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
