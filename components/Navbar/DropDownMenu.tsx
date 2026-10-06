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
       <Button variant={'outline'} className='flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 h-9 w-auto sm:w-[76px]'>
        <LuAlignLeft className="h-4 w-4 shrink-0" />
        <UserIcon />
       </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <SignedOut>
              <DropdownMenuItem asChild>
                <SignInButton mode='modal'>
                  <button className='w-full text-left px-2 py-1.5 text-sm cursor-pointer rounded-sm hover:bg-accent transition-colors'>
                    Sign In
                  </button>
                </SignInButton>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <SignUpButton mode='modal'>
                  <button className='w-full text-left px-2 py-1.5 text-sm cursor-pointer rounded-sm hover:bg-accent transition-colors'>
                    Sign Up
                  </button>
                </SignUpButton>
              </DropdownMenuItem>
            </SignedOut>
            <SignedIn>
              {DrobDown.map((link) => {
                if (link.name === 'dashboard' && !IsAdmin) return null;
                return (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href} className='w-full cursor-pointer'>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
             
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
