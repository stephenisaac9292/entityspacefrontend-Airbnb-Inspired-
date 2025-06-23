import React from 'react'

const SearchFilter = () => {
  return (
<div className="h-[64px] w-max flex flex-row justify-between 
                border border-gray-200 rounded-full ">
    {/* sub divisions */}

    {/* 1 */}
    <div className='flex flex-col justify-center w-full h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Where</p>
        <p className='text-sm  font-semibold'>Wanted location</p>
    </div>

    {/* 2 */}
    <div className='flex flex-col justify-center w-full h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Check-in</p>
        <p className='text-sm  font-semibold'>Add dates</p>
    </div>

    {/* 3 */}
    <div className='flex flex-col justify-center w-full h-full
                    px-8 box-border rounded-full hover:bg-gray-100 '
    >
        <p className='text-xs text-entityspace font-semibold'>Check-out</p>
        <p className='text-sm  font-semibold'>Add dates</p>
    </div>
</div>
  )
}

export default SearchFilter


// import React from 'react'

// const SearchFilter = () => {
//   return (
//     <div className="h-[64px] flex items-center border border-gray-200 rounded-full">
//       {/* This inner div will grow to fill the parent and get the hover */}
//       <div
//         className="
//           flex items-center
//           w-full h-full              
//           px-8                        
//           box-border                  
//           rounded-full
//           hover:bg-gray-100           
//           transition-colors duration-150
//         "
//       >
//         where
//       </div>
//     </div>
//   )
// }

// export default SearchFilter
