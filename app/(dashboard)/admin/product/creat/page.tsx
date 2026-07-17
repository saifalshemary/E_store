import ChekBoxInput from '@/components/form/ChekBoxInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import Buttons from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { createProductFunction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';

async function CreateProductPage(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
}

function CreatProduct() {
  return (
    <section >
      <h2 className='font-semibold mb-8 capitalize text-2xl'>create product</h2>
      <div className='border p-8 runded-md'>
        <FormContainer action={createProductFunction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
            type='text'
            name='name'
            label='Product name'
            />
            <PriceInput />
            <ImageInput name="image"/>
            <TextAreaInput 
            name='description'
            labelText='description '
            />
            <div className='mt-6'>
              <ChekBoxInput name='featured' label='featured'/>
            </div>
            <Buttons text='Create Product' className='mt-6'/>
          </div>
        </FormContainer>
      </div>
      
 
    </section>
  )
}

export default CreatProduct