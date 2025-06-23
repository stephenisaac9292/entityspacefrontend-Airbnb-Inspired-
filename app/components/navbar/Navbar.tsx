import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchFilter from './SearchFilter'
const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0  bg-white  z-50 py-6 border-b border-gray-200'>
        <div className='max-w-[1500px] mx-auto px-6 '>
            <div  className='flex justify-between items-center '>
                <Link href="/">
                    <Image 
                        src="/entityLogo.svg"
                        alt ="Entity Space logo"
                        width={85}
                        height={85}
                    />
                </Link>
 
                <div className='flex space-x-6'>
                    <SearchFilter />
                </div> 

                <div className='flex items-center space-x-6'>
                    <div>
                        user signup
                    </div> 
                    <div>
                        -- login
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar  