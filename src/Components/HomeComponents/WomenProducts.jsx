import React from 'react'
import { Link } from 'react-router-dom'

const WomenProducts = () => {
  return (
    <>
    <div className='flex justify-between mx-20 mt-20'>
        <h1 className='text-xl font-semibold '>For Women</h1>
        <Link>See More</Link>
    </div>

    <div className="flex flex-col lg:flex-row lg:justify-around items-center justify-center lg:space-x-5 space-y-5 lg:mx-20 mt-2">
    <div className='border-2 border-gray-500 hover:border-yellow-600 hover:shadow-inner rounded-md'>
            <img src="assets/categories/women.jpg"  alt="" className='rounded-t-md' />
            <h1 className='text-lg font-medium mt-2 p-2'>Necklace</h1>
            <h1 className='text-lg font-medium  p-2'>Price:2000/-</h1>
            <h1 className='text-sm font-medium  p-2'>3 Days Ago</h1>
        </div>
        <div className='border-2 border-gray-500 hover:border-yellow-600 hover:shadow-inner rounded-md'>
            <img src="assets/categories/women.jpg"  alt="" className='rounded-t-md' />
            <h1 className='text-lg font-medium mt-2 p-2'>Necklace</h1>
            <h1 className='text-lg font-medium  p-2'>Price:2000/-</h1>
            <h1 className='text-sm font-medium  p-2'>3 Days Ago</h1>
        </div>
        <div className='border-2 border-gray-500 hover:border-yellow-600 hover:shadow-inner rounded-md'>
            <img src="assets/categories/women.jpg"  alt="" className='rounded-t-md' />
            <h1 className='text-lg font-medium mt-2 p-2'>Necklace</h1>
            <h1 className='text-lg font-medium  p-2'>Price:2000/-</h1>
            <h1 className='text-sm font-medium  p-2'>3 Days Ago</h1>
        </div>
        <div className='border-2 border-gray-500 hover:border-yellow-600 hover:shadow-inner rounded-md'>
            <img src="assets/categories/women.jpg"  alt="" className='rounded-t-md' />
            <h1 className='text-lg font-medium mt-2 p-2'>Necklace</h1>
            <h1 className='text-lg font-medium  p-2'>Price:2000/-</h1>
            <h1 className='text-sm font-medium  p-2'>3 Days Ago</h1>
        </div>
      
      
    </div>
    </>
  )
}

export default WomenProducts