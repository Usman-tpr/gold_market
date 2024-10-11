import React from 'react'
import SliderBanner from '../Components/SliderBanner'
import FAQs from '../Components/FAQs';
import HomeProducts from '../Components/HomeProducts';
import Search from '../Components/Search';
import GoldTicker from '../Components/HomeComponents/GoldTicker';
import Logo from '../Components/HomeComponents/Logo';
import SubNav from '../Components/HomeComponents/SubNav';
import Categories from '../Components/HomeComponents/Categories';
import WomenProducts from '../Components/HomeComponents/WomenProducts';
import MenProducts from '../Components/HomeComponents/MenProducts';
import KidsProducts from '../Components/HomeComponents/KidsProducts';
import Footer from '../Components/Footer';
const Home = () => {
  const steps = [
    { id: 1, title: 'Create an Account', description: 'Sign up easily to start selling your gold.' },
    { id: 2, title: 'Post Your Gold', description: 'Provide details about your gold for buyers to see.' },
    { id: 3, title: 'Receive Offers', description: 'Get competitive offers from trusted buyers.' },
    { id: 4, title: 'Sell Securely', description: 'Complete the transaction with secure payments.' },
  ];

  const listings = [
    { id: 1, title: 'Gold Ring', price: '$300', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Gold Necklace', price: '$1200', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Gold Bracelet', price: '$700', image: 'https://via.placeholder.com/200' },
  ];

  const testimonials = [
    { id: 1, name: 'John Doe', review: 'Selling my gold was easy and safe! Got the best price.' },
    { id: 2, name: 'Jane Smith', review: 'The patform was trustworthy and I sold my gold quickly.' },
  ];
  return (
    <>
      <GoldTicker />
    <div className='lg:block hidden'>
    <SliderBanner />
    </div>
      <Categories />
      <WomenProducts />
      <MenProducts />
      <KidsProducts />
      <Footer />
    {/* <HomeProducts /> */}


      {/* <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-600">Why Choose Us</h2>
        <p className="mt-4 text-gray-700">
          Gold Market is the most trusted marketplace to sell your gold securely and quickly.
          We ensure you get the best prices, with guaranteed safety and transparency. Join 
          thousands of satisfied customers who trust us with their valuable gold.
        </p>
      </div>
    </section> */}

      {/* <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-600">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-600">Popular Listings</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map(item => (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-yellow-600 text-lg">{item.price}</p>
              <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* <section className="py-12 bg-yellow-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Ready to Sell Your Gold?</h2>
        <p className="mt-4">Sign up now and start posting your gold items for sale today!</p>
        <button className="mt-8 bg-white text-yellow-600 py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section> */}

      {/* <FAQs /> */}
    </>
  )
}

export default Home