import React from 'react'

const SearchFilter = () => {
  return (
<div className="relative h-[50px] w-max flex flex-row justify-between 
                border-2 border-gray-200 mt-5 rounded-full 
                shadow-[0px_5px_15px_2px_#E5E4E2]">
    {/* sub divisions */}

    {/* 1 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Where</p>
        <p className='text-sm text-gray-600 '>Search destinations</p>
    </div>

    {/* 2 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Where</p>
        <p className='text-sm text-gray-600 '>Search destinations</p>
    </div>

    {/* 3 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Where</p>
        <p className='text-sm text-gray-600 '>Search destinations</p>
    </div>

    {/* 4 */}
    <div className='flex flex-col justify-center h-full
                    px-8 pr-14 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Where</p>
        <p className='text-sm text-gray-600 '>Search destinations</p>

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

