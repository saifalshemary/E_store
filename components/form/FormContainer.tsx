'use client'

import { ActionFunction } from '@/utils/type';
import { useRouter } from 'next/navigation';
import React, { startTransition, useActionState, useEffect } from 'react'
import { start } from 'repl';
import { toast } from 'sonner';

interface FormProps {
    children: React.ReactNode,
    action : ActionFunction
    
}

const initialState = {
    message:'',
}

function FormContainer({children ,action}:FormProps) {

    const [state , formAction ] = useActionState(action , initialState);
    const router = useRouter();
    const[isPending , startTransition ] = React.useTransition();

    useEffect(()=>{

        if(state.message) toast('',{description:state.message});
        startTransition(()=>{
            setTimeout(()=>{
                router.refresh();
            },10)
        })

    }, [state])

    return (
    <form action={formAction} >
        {children}
    </form>
)
}

export default FormContainer