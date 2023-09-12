import React from 'react';

const NavBar = () => {
  return (

    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-slate-900 text-xl font-bold">
          <a class="flex gap-3 items-center text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-purple-500 hover:to-pink-500 hover:via-indigo-500" href="/">
            <img class="h-12" src="https://i.ibb.co/RyD05rG/globe.png" alt="" />
            Traveling
          </a>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-slate-900 text-2xl font-semibold hover:text-gray-400 duration-300">Home</a>
          </li>
          <li>
            <a href="/" className="text-slate-900 text-2xl font-semibold hover:text-gray-400 duration-300">Destination</a>
          </li>
          {/* <li>
            <a href="/services" className="text-slate-900 text-2xl font-semibold hover:text-gray-400 duration-300">Services</a>
          </li> */}
          <li>
            <a href="/" className="text-slate-900 text-2xl font-semibold hover:text-gray-400 duration-300">Client</a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <button className="bg-green-500 text-white text-xl hover:bg-green-700 duration-300  p-2 rounded-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
