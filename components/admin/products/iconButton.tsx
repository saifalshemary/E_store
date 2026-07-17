"use client"


import FormContainer from '@/components/form/FormContainer';
import { Button } from '@/components/ui/button';
import { icons, Loader2Icon, LucideEdit2 , } from 'lucide-react';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { LuTrash2 } from 'react-icons/lu';
import { ca } from 'zod/v4/locales';

type ActionType = 'edit' | 'delete';
function IconButton({ActionType}: {ActionType: ActionType}) {
    const {pending} = useFormStatus();

    const randerIcon = () => {
        switch (ActionType){
            case 'edit':
                return <LucideEdit2 />
            case 'delete':
                return <LuTrash2 />
        }
    }

  return (
    <Button
    type='submit'
    variant={'link'}
    size={'icon'}
    className='p-2 cursor-pointer'
    >
        {pending ? <Loader2Icon className='animate-spin'/> : randerIcon()}
    </Button>
  )
}

export default IconButton

