import { useState } from 'react';
import { postRequest } from '../Requests/Request';
import Notification from '../Components/Notification';
import { useNavigate } from 'react-router-dom';

const PostProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [],
    price: '',
    category: '',
    subCategory: '',
    location: '',
  });

  const [notification, setNotification] = useState({ show: false, message: '' });
  const navigate = useNavigate();

  const categories = {
    Man: ['Necklace', 'Ring', 'Bracelet'],
    Woman: ['Earrings', 'Bangles', 'Brooch'],
    Child: ['Kids Necklace', 'Kids Ring', 'Kids Bracelet'],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, ...Array.from(files)],
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); 
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    for (let key in formData) {
      if (key === 'images' && formData[key].length > 0) {
        formData[key].forEach((file) => {
          productData.append('images', file);
        });
      } else {
        productData.append(key, formData[key]);
      }
    }

    // Set the category and subcategory based on selections
    productData.append('category', selectedCategory);
    productData.append('subCategory', selectedSubcategory);
  
    try {
      console.log(selectedCategory , selectedSubcategory)
      const response = await postRequest('/product/add', productData);
      if (response.success) {
        setNotification({ show: true, message: 'Product added successfully!' });
        navigate('/'); // Redirect after successful submission
      } else {
        setNotification({ show: true, message: 'Failed to add product. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const districts = [
    "Awaran", "Barkhan", "Chaghi", "Chaman", "Dera Bugti", "Duki", "Gwadar", "Harnai", "Hub",
    // other districts...
  ];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">Post Your Product</h2>
          
          {/* Category Selection */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Category</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.keys(categories).map(category => (
                <button
                  key={category}
                  className={`w-full p-2 border rounded-md ${selectedCategory === category ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Show Subcategories for Selected Category */}
          {selectedCategory && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Select Subcategory for {selectedCategory}</h3>
              <div className="grid grid-cols-3 gap-4">
                {categories[selectedCategory].map(subcategory => (
                  <button
                    key={subcategory}
                    className={`w-full p-2 border rounded-md ${selectedSubcategory === subcategory ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* If a subcategory is selected, show the product form */}
          {selectedSubcategory && (
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Product Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="2"
                ></textarea>
              </div>

              {/* Images */}
              <div className="mb-4">
                <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
                  Product Images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  onChange={handleChange}
                  multiple
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {formData.images.length > 0 && (
                  <div className="mt-2 text-gray-600">
                    {formData.images.map((file, index) => (
                      <p key={index}>{file.name}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300"
              >
                Post Product
              </button>
            </form>
          )}

        </div>
      </div>

      <Notification
        show={notification.show}
        message={notification.message}
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </>
  );
};

export default PostProductForm;
