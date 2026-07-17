'use client'
import { Button } from '@/components/ui/button'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use } from 'react'

function Sidebar() {
  const path_url = usePathname();
  return (
    <aside>
      {adminLinks.map((link) =>{
        const active_page = link.href === path_url;
      return (
        <Button
        key={link.name}
          asChild
          className='w-full mt-2 capitalize jistify-start font-normal'
          variant={active_page ? 'default': 'ghost'}
          >
            <Link href={link.href}>
              {link.name}
            </Link>
          </Button>)
      })}
    </aside>
  )
}

export default Sidebar