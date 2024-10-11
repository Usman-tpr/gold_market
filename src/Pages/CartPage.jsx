import React, { useState, useEffect } from 'react';
import { getRequest, postRequest } from '../Requests/Request'; // Assuming these are your custom request functions
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getRequest('/user/cart'); // Assuming this is the API endpoint for fetching cart items
        setCartItems(response.body.cartItems);
        calculateTotal(response.body.cartItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleRemoveItem = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleCheckout = async () => {
    try {
      const response = await postRequest('/user/checkout', { cartItems });
      if (response.success) {
        alert('Checkout successful!');
        setCartItems([]); // Clear the cart after successful checkout
        setTotalPrice(0);
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.log(error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className='max-w-5xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Shopping Cart</h2>

      {/* Cart Items Section */}
      {cartItems.length > 0 ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cartItems.map((item) => (
              <div key={item.id} className='border border-gray-300 p-6 rounded-md flex items-center space-x-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-24 h-24 object-cover rounded-md'
                />
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                  <p className='text-yellow-600 font-bold'>${item.price}</p>
                  <div className='flex items-center space-x-4 mt-4'>
                    <label htmlFor={`quantity-${item.id}`} className='font-medium'>
                      Quantity:
                    </label>
                    <input
                      type='number'
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      min='1'
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className='w-16 px-2 py-1 border rounded-md'
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className='text-red-500 hover:text-red-700'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className='mt-12 bg-gray-50 p-8 rounded-md'>
            <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>
            <div className='flex justify-between mb-4'>
              <p className='font-medium text-gray-800'>Subtotal</p>
              <p className='font-medium text-gray-800'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex justify-between mb-4'>
              <p className='font-medium text-gray-800'>Shipping Estimate</p>
              <p className='font-medium text-gray-800'>$10.00</p>
            </div>
            <div className='flex justify-between mb-4'>
              <p className='font-medium text-gray-800'>Tax Estimate</p>
              <p className='font-medium text-gray-800'>${(totalPrice * 0.05).toFixed(2)}</p>
            </div>
            <div className='flex justify-between border-t pt-4'>
              <p className='text-xl font-bold'>Total</p>
              <p className='text-xl font-bold text-yellow-600'>
                ${(totalPrice + 10 + totalPrice * 0.05).toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleCheckout}
              className='mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400'
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className='text-center text-gray-600'>Your cart is currently empty.</p>
      )}

      {/* Continue Shopping Button */}
      <div className='mt-8 text-center'>
        <Link
          to='/products'
          className='text-yellow-600 hover:text-yellow-800 underline font-medium'
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
