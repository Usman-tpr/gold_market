import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
      <Link to='/' className='flex space-x-4 items-center justify-center'>
      <img src="/assets/Logo/Preview.png" alt="logo" className='w-14 rounded-full'/>
      <p className='text-black font-bold'>Gold Bazaar</p>
      </Link>

        </>
    )
}

export default Logo