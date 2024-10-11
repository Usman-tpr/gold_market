import React, { useState, useEffect } from 'react';
import { getRequest } from '../Requests/Request';
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await getRequest('/product/all-products');
            setData(response.body);
            console.log(response.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleNavigate = (id) => {
        navigate("/product-details", { state: { id } });
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Jewelry</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data && data.map((item) => (
                    <div 
                        key={item._id}
                        className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => handleNavigate(item._id)}
                    >
                        <img 
                            src={`http://localhost:5000/${item.images[0]}`} 
                            className="w-full h-48 rounded-t-lg object-cover" 
                            alt={item.title} 
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-red-500 mt-2">RS.{item.price} /-</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
