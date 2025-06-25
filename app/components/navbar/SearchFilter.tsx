import React from 'react'

const SearchFilter = () => {
  return (
<div className="relative h-[65px] w-max flex flex-row justify-between 
                border border-gray-300 mt-5 rounded-full 
                shadow-[0px_5px_15px_2px_#E5E4E2]">
    {/* sub divisions */}

    {/* 1 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold text-gray-900 font-sans'>Where</p>
        <p className='text-sm text-gray-600 font-sans'>Search destinations</p>
    </div>

    {/* 2 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Check in</p>
        <p className='text-sm text-gray-600 '>Add dates</p>
    </div>

    {/* 3 */}
    <div className='flex flex-col justify-center h-full
                    px-8 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Chech out</p>
        <p className='text-sm text-gray-600 '>Add dates</p>
    </div>

    {/* 4 */}
    <div className='flex flex-col justify-center h-full
                    px-8 pr-18 box-border rounded-full hover:bg-gray-200 '
    >
        <p className='text-xs font-semibold'>Who</p>
        <p className='text-sm text-gray-600 '>Add guests</p>

    </div>

    {/* 5 */}
    <div className="absolute right-2 top-1/2 -translate-y-1/2 
                    w-12 h-12 bg-entityspace text-white rounded-full 
                      flex items-center justify-center 
                      hover:bg-red-600 cursor-pointer transition"
    >
        
    </div>
   
    
</div>
  )
}

export default SearchFilter

