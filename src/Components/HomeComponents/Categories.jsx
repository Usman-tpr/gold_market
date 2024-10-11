import React from 'react'

const Categories = () => {
    return (
        <>
            <h1 className='mt-10 mx-10 text-2xl font-bold'>All Categories</h1>

            <div className="flex  flex-wrap lg:flex-row lg:justify-around items-center justify-center lg:space-x-5 space-y-5 lg:mx-20 mt-2">
            <div className='flex flex-col items-center'>
                    <img src="assets/categories/women.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>Womens</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/men.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>Mens</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/kids.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>Kids</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/new.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>New</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/old.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>Old</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/new.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>New</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="assets/categories/old.jpg" alt="" className='w-20 h-20 mx-2 rounded-full' />
                    <h1 className='text-xl font-semibold'>Old</h1>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <button className='text-xl font-semibold border-yellow-600 border-2  rounded-2xl text-center px-20 py-2'>See All</button>

            </div>
        </>
    )
}

export default Categories