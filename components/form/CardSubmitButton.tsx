'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

function CardSubmitButton({isfav}:{isfav:boolean}) {
    const {pending} = useFormStatus()
  return (
     <Button 
        size={'icon'}
        type='submit'
        className='bg-gray-700 hover:bg-gray-900 hover:cursor-pointer text-white p-3 rounded-xl'
        >
             {
        pending ?(
            <Loader2 className='animate-spin'/>

        ) :isfav ? <FaHeart /> : <FaRegHeart />
    }
            
        </Button>
    
   
  )
}

export default CardSubmitButton