import React from 'react';


const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-2 flex items-center justify-between">
      <div className="flex items-center">
        <img src="logo-white.png" alt="Company Logo" className="h-24 mr-5" /> 
        <h1 className="text-lg font-bold">Care Vision AI : An AI-powered Diagnostic Assistant</h1>
      </div>
      <nav>
        <ul className="flex mr-10">
          <li className="ml-4"><a href="#" className="hover:text-gray-300">Home</a></li>
          <li className="ml-4"><a href="#" className="hover:text-gray-300">About</a></li>
          <li className="ml-4"><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
