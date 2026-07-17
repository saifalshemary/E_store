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
  <SignOutButton>
      <Link href={'/'} className='w-full text-left' onClick={handelLogout}>
        Sign Out
      </Link>
  </SignOutButton >
  )
}


export default SingOut