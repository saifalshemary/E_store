import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "../../components/ui/dropdown-menu";
import { Button } from '../ui/button';
import Link from "next/link";
import { LuAlignLeft } from 'react-icons/lu';
import { DrobDown } from '../../utils/links';
import SignOut from '../Navbar/SingOut';
import  UserIcon  from '../Navbar/UserIcon';
import { SignedIn, SignedOut, SignInButton ,SignUpButton} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

async function DropDownMenu() {

  const { userId } = await auth();
  const IsAdmin = userId === process.env.ADMIN_USER_IDS;
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant={'outline'} size={'icon'} className='flex gap-3 max-w-[100px] w-[80PX]'>
        <LuAlignLeft/>
        <UserIcon/>
       </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <SignedOut>
              <DropdownMenuItem className='flex flex-col gap-2'>
                <SignInButton mode='modal'>
                  <Button className='w-full'>
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode='modal' >
                  <Button className='w-full' variant={'outline'}>
                    Sign Up
                  </Button>
                </SignUpButton>
              </DropdownMenuItem>
            </SignedOut>
            <SignedIn>
              {DrobDown.map((link) => {

              if(link.name === 'dashboard' && !IsAdmin) return null;
                return (
              <DropdownMenuItem key={link.name}>
                <Link href={link.href }>
                {link.name}
                </Link>
                
              </DropdownMenuItem>
            )
              }
            )}
             
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOut/>
            </DropdownMenuItem>
            </SignedIn>

        </DropdownMenuContent>

       
    </DropdownMenu>
    </>
  )
}

export default DropDownMenu
