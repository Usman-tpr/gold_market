import React from 'react';

const SliderBanner = () => {
  return (
    <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1723802205475-1f43a3eb8b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8andlbGxlcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4">Welcome to Your Trusted Jewelry Marketplace</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Discover the best deals on new and vintage jewelry. Buy, sell, and trade with confidence!
        </p>
        <div className="flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-200">
            Browse Jewelry
          </button>
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-lg transition duration-200">
            Sell Your Jewelry
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
