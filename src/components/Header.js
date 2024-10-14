import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-300 p-5 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-4xl text-black font-bold pl-5">Aurora Refúgio</h1>
      </div>
      <nav className="nav">
        <button className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Language
        </button>
        <Link to="/" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Home
        </Link>
        <Link to="/guia" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Guia
        </Link>
        <Link to="/faq" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          FAQ
        </Link>
        <Link to="/auth" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Log In
        </Link>
        <Link to="/usuario" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Perfil
        </Link>
        <Link to="/auth" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200">
          Log Out
        </Link>
       
      </nav>
    </header>
  );
};

export default Header;
