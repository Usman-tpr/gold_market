import React from 'react'
import Logo from './HomeComponents/Logo'
import Search from './Search'
import SubNav from './HomeComponents/SubNav'

const Navbar = () => {
  return (
   <>
         <div className='flex lg:flex-row flex-col items-center justify-around space-x-10 lg:mx-24 mx-0'>
        <div>
          <Logo />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <SubNav />
        </div>
      </div>
   </>
  )
}

export default Navbar