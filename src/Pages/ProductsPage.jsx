import React, { useState, useEffect } from 'react';
import { getRequest } from '../Requests/Request'; // Assuming this is your custom request function

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest('/product/all-products'); 
        console.log(response.body)
        setProducts(response.body);

        setFilteredProducts(response.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    console.log(e.target.value)
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>My Products</h2>
      
      {/* Search Input */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
      </div>
      
      {/* Products List */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className='border border-gray-200 rounded-lg p-4'>
              <img
                src={`http://localhost:5000/${product.images[0]}`}
                alt={product.name}
                className='w-full h-40 object-cover mb-4 rounded-md'
              />
              <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
              <p className='text-gray-700 mb-2'>{product.desc}</p>
              <p className='font-bold text-yellow-600'>${product.price}</p>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-600'>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
