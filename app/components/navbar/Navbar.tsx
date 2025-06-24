import React from 'react'
import SearchFilter from './SearchFilter'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 bg-white
                    z-50 py-6 border-b border-gray-200
                    bg-gradient-to-b from-white to-gray-50
                    '>
        <div className='max-w-[1440px] px-13 '>
            {/* Top row: logo and user actions */}
            <div className='flex justify-between items-center'>
                <Logo />
                <div className='flex items-center space-x-6'>
                    <p>user signup</p> 
                    <p>-- login</p>
                </div>
            </div>

            {/* Search bar, centered */}
            <div className="flex justify-center mt-4">
                <SearchFilter />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
