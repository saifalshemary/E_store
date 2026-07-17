'use client'

import React from 'react'
import FormContainer from '@/components/form/FormContainer'
import { createHeroAction } from '@/utils/actions'
import FormInput from '@/components/form/FormInput'
import ImageInput from '@/components/form/ImageInput'
import Buttons from '@/components/form/Buttons'

function FormCreatHero() {
  return (
    <div className='border p-8 rounded-md max-w-lg mx-auto mt-6'>
      <FormContainer action={createHeroAction}>
        <div className='grid gap-4 my-4'>
          <FormInput
            type='text'
            name='titile'
            label='Hero Title'
            placeholder='Enter hero title'
          />
          <ImageInput name='image' />
          <Buttons text='Create Hero' className='mt-4' />
        </div>
      </FormContainer>
    </div>
  )
}

export default FormCreatHero