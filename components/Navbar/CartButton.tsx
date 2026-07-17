import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { links } from '../../utils/links';
function CartButton() {
  return (
    <Button 
    asChild
    variant={'outline'}
    className=' flex justify-center items-center relative'
    size='icon'>

      <Link href={links.CART.href}>
        <LuShoppingCart/>
        <span className='absolute -top-3 -right-3 bg-blue-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs'>
          2
        </span>
      </Link>

    </Button>
  )
}

export default CartButton