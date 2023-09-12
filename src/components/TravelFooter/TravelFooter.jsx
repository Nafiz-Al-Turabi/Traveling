import React from 'react';

function TravelFooter() {
    return (
        <footer className=" bg-gradient-to-t from-yellow-700 via-yellow-500 to-white text-white p-4">
            <div className="flex justify-between">
                <div className="md:w-1/2">
                    <a class="flex gap-3 items-center text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-purple-500 hover:to-pink-500 hover:via-indigo-500" href="/">
                        <img class="h-12" src="https://i.ibb.co/RyD05rG/globe.png" alt="" />
                        Traveling
                    </a>
                    <p className="text-gray-200 mb-6">
                        Your gateway to unforgettable adventures and amazing destinations.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-200 hover:text-yellow-300 transition duration-300">
                            Home
                        </a>
                        <a href="#" className="text-gray-200 hover:text-yellow-300 transition duration-300">
                            Destinations
                        </a>
                        <a href="#" className="text-gray-200 hover:text-yellow-300 transition duration-300">
                            Blog
                        </a>
                        <a href="#" className="text-gray-200 hover:text-yellow-300 transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-2xl font-semibold mb-4">Subscribe to our newsletter</h4>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white text-slate-800 rounded-l-md px-4 py-2 focus:outline-none"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-r-md px-4 py-2 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-300">&copy; {new Date().getFullYear()} Traveling Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default TravelFooter;
