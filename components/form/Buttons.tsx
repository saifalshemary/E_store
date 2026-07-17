'use client'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { VscLoading } from 'react-icons/vsc';

type ButtonSize = 'sm' | 'md' | 'lg' |'default' | 'icon';

interface ButtonsProps {
  className?: string,
  text?: string,
  size?: ButtonSize,
}

function Buttons({className='',text='Submit',size='lg'}:ButtonsProps) {

  const {pending} = useFormStatus();

  
  return (
    <Button 
    type='submit'
    className={cn('capitalize',className)}
    disabled={pending}
    >
      {
        pending?(
        <>
          plese wait...
          <VscLoading className='animate-spin inline-block ml-2'/>
        </>
        ) :
        text
      }
    </Button>

  )
}

export default Buttons