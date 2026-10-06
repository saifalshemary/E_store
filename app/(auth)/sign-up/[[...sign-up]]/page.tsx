import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div className='flex min-h-[calc(100vh-14rem)] items-center justify-center py-10'>
      <SignUp />
    </div>
  )
}

export default SignUpPage