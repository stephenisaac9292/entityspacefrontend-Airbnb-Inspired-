import React from 'react'

const SearchFilter = () => {
  return (
<div className="relative h-[64px] w-max flex flex-row justify-between 
                border border-gray-200 rounded-full ">
    {/* sub divisions */}

    {/* 1 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Where</p>
        <p className='text-sm font-semibold'>Wanted location</p>
    </div>

    {/* 2 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Check-in</p>
        <p className='text-sm  font-semibold'>Add dates</p>
    </div>

    {/* 3 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Check-out</p>
        <p className='text-sm  font-semibold'>Add dates</p>
    </div>

    {/* 4 */}
    <div className='flex flex-col justify-center h-full
                    px-8 pr-14 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Call-us</p>
        <p className='text-sm  font-semibold'>Rating: please 5 star</p>

    </div>
    <div className="absolute right-2 top-1/2 -translate-y-1/2 
                    w-10 h-10 bg-entityspace text-white rounded-full 
                      flex items-center justify-center 
                      hover:bg-red-600 cursor-pointer transition">
        
      </div>
   
    
</div>
  )
}

export default SearchFilter

