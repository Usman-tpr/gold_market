import React, { useState, useRef } from 'react';
import { getRequest } from '../Requests/Request';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [data, setData] = useState([]);
    const [isFocused, setIsFocused] = useState(false); // Track focus
    const navigate = useNavigate();
    const searchRef = useRef(null);

    const fetchData = async (query) => {
        try {
            const response = await getRequest(`http://localhost:5000/product/search?q=${query}`);
            console.log(response);
            setData(response); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
        
    const handleNavigate = (id) => {
        navigate("/product-details", { state: { id } });
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        if (!searchRef.current.contains(e.relatedTarget)) {
            setIsFocused(false);
        }
    };

    return (
        <>
            <div className='flex justify-center items-center lg:my-10 my-2'>
                <input
                    type="text"
                    className='lg:w-96 w-64 rounded-l-xl border-2 lg:py-2 focus:outline-none px-2 focus:border-yellow-500'
                    onChange={(e) => fetchData(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Search products..."
                />
                <h1 className='bg-yellow-500 text-white text-xl lg:py-2 rounded-r-lg px-2'>
                    Search
                </h1>
            </div>

            {isFocused && data.length > 0 && (
                <div ref={searchRef} tabIndex={-1} className='fixed inset-0 z-50 flex flex-col items-center mt-[13%]'>
                    <div className='bg-white p-6 rounded-xl'>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index} className='mb-4'>
                                    <h3 
                                        onClick={() => handleNavigate(item._id)}
                                        className='cursor-pointer'
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            ))
                        ) : (
                            <p>No results found</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
