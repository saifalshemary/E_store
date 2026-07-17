import React from 'react'
import { FaStar , FaRegStar } from 'react-icons/fa'

function Rating({rating}: {rating: number}) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1 <=rating )
  return (
    <div className='flex items-center gap-x-1'>
      {
        stars.map((full , i ) =>{
          return full ? 
          (
            <FaStar key={i} className='text-yellow-500 w-4 h-4'/>
          ) : (
            <FaRegStar key={i} className='text-gray-300 w-4 h-4'/>
          )
          
        })
      }
    </div>
  )
}

export default Rating