import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Categories Column */}
        <div>
          <h4 className="font-bold mb-3">Categories</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Gold Jewelry</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Silver Jewelry</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Platinum Rings</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Old Collections</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div>
          <h4 className="font-bold mb-3">About</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Our Story</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Our Team</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Careers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Testimonials</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">FAQs</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Shipping & Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Order Status</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Facebook</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Instagram</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">Twitter</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-600">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; 2024 YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
