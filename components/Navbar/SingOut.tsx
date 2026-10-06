"use client";
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner'
import { SignOutButton } from '@clerk/nextjs'
function SingOut() {
  const handelLogout = () => {
    toast("Sign Out ...")
  }
  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left cursor-pointer' onClick={handelLogout}>
        Sign Out
      </button>
    </SignOutButton>
  )
}


export default SingOut