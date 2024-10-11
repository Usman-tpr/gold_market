import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getRequest } from '../../Requests/Request';

const SubNav = () => {
  const [name, setName] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest('/user');
        console.log(response);
        setName(response.body.name);
      } catch (error) {
        console.log(error);
        if (!error.response.data.success) {
          localStorage.removeItem("g_token");
        }
      }
    };
    fetchData();
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='flex space-x-8 items-center my-2'>
      <Link to='/post' className='text-xl font-semibold border-yellow-800 border-2 lg:px-10 lg:py-2 px-4 rounded-full text-center'>
        Sell Now
      </Link>
      <Link to='/check-out' className='flex items-center'>
        <PiShoppingCartSimpleLight size={30} />
        <p className='w-5 h-5 text-sm relative bottom-3 right-3 text-center rounded-full bg-red-700 text-white'>3</p>
      </Link>
      {name ? (
        <div className='relative'>
          <button
            onClick={handleDropdownToggle}
            className="flex items-center text-gray-800 hover:text-yellow-600 border-2 border-black rounded-full p-2"
          >
            {name.split(' ')[0].charAt(0).toUpperCase() + name.split(' ')[1]?.charAt(0).toUpperCase()}
            <span className='ml-2'>
              {isDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {isDropdownVisible && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50'>
              <Link
                to='/profile/edit'
                className='block px-4 py-2 text-gray-800 hover:bg-yellow-100'
              >
                Edit Profile
              </Link>
              <Link
                to='/post'
                className='block px-4 py-2 text-gray-800 hover:bg-yellow-100'
              >
                Add Products
              </Link>
              <Link
                to='/profile/products'
                className='block px-4 py-2 text-gray-800 hover:bg-yellow-100'
              >
                See Your Products
              </Link>
              <Link
                to='/settings'
                className='block px-4 py-2 text-gray-800 hover:bg-yellow-100'
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("g_token");
                  window.location.href = '/login';
                }}
                className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link to='/signup' className="block text-gray-800 hover:text-yellow-600">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubNav;
