


import React from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs'
import { FaRegHeart } from 'react-icons/fa'

function CardSingButton() {
  return (
    <SignInButton mode='modal'>
      <Button 
        size={'icon'}
        type='button'
        className='bg-gray-700 hover:bg-gray-900 hover:cursor-pointer text-white p-3 rounded-xl'
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

export default CardSingButton