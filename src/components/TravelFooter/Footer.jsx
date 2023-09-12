import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-5">
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h2 className="text-xl font-semibold">Explore</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Destinations</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Hotels</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Flights</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Activities</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Company</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Terms &amp; Conditions</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Connect</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Your Travel Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
