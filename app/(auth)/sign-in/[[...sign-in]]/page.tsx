import React from 'react'
import { SignIn } from '@clerk/nextjs'


function SignInPage() {
  return (
    <div className='flex min-h-[calc(100vh-14rem)] items-center justify-center py-10'>
      <SignIn />
    </div>
  )
}

export default SignInPage