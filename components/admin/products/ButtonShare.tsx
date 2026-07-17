'use client'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LuShare2 } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

function ButtonShare({id , name}: {id?: string, name?: string}) {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/products/${id}`;
  return (
    <div>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size={'icon'} 
                    className='p-2 '>
                    <LuShare2 size={20}/>
                </Button>
            </PopoverTrigger>

            <PopoverContent
            side='top'
            align='end'
            sideOffset={10}
            className='flex items-center gap-x-2 hustify-center w-full'>
                <TwitterShareButton url={shareLink} title={name}>
                    <TwitterIcon size={32} round/>
                </TwitterShareButton>
                <FacebookShareButton url={shareLink} title={name}>
                    <FacebookIcon size={32} round/>
                </FacebookShareButton>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default ButtonShare