'use client';
import Buttons from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import ImageInput from '@/components/form/ImageInput';
import { Button } from '@/components/ui/button';
import { ActionFunction } from '@/utils/type';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';


type imageInputContainerProps = {
    name: string,
    image:string,
    action:ActionFunction,
    text:string,
    children?:React.ReactNode
}

function ImageInputContainer(props:imageInputContainerProps) {
    const {name,image,action,text, children} = props;

    const [isUpdateForemVisible , setIsUpdateForemVisible] = useState(false);

  return (
    <div className='mt-8'>
        <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className='rounded-md object-cover mb-4 w-[200px] h-200px]'
        />
        <Button variant={'outline'} size={'sm'}
        className='hover:cursor-pointer'
        onClick={()=> setIsUpdateForemVisible(prev => !prev)}
        >
          {text}
        </Button>

        {isUpdateForemVisible && (
          <div className='max-w-md mt-4 '>
          <FormContainer action={action}>
            {children}
            <ImageInput name="image" />
            <Buttons size='sm' />
          </FormContainer>

        </div>
        )}
    </div>

  )
}

export default ImageInputContainer