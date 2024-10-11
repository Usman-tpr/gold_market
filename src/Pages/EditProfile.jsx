import React, { useState, useEffect } from 'react';
import { getRequest, postRequest } from '../Requests/Request'; // Assuming these are your custom request functions

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest('/user');
        const userData = response.body;

        setFormData({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          password: '', // Password should not be fetched directly
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequest('/user/edit', formData);
      if (response.success) {
        alert('Profile updated successfully');
      } else {
        alert('An error occurred while updating your profile');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while updating your profile');
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Edit Profile</h2>
      <form onSubmit={handleFormSubmit} className='space-y-6'>
        <div>
          <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div>
          <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
            New Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
            placeholder='Leave blank to keep current password'
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400'
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
