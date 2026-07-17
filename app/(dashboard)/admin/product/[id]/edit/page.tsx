import ChekBoxInput from '@/components/form/ChekBoxInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { updateProductImageAction } from '@/utils/actions'
import React from 'react'
import Buttons from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import {  fetchSinglProducts, updateProductAction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInputContainer from '@/components/admin/products/imageInputContainer';




async function EditProductPage({params}: {params: Promise<{id: string}>}) {
  
  const {id} = await params;
  const product = await fetchSinglProducts(id);
  const {name ,description , featured ,price ,image } = product;
  
  return (

    <section >
          <h2 className='font-semibold mb-8 capitalize text-2xl'>create product</h2>
          <div className='border p-8 runded-md'>
          <ImageInputContainer 
          action={updateProductImageAction}
          name={name}
          image={image}
          text='Update Image'
          >
            <input type="hidden" name='id' value={id} />
            <input type="hidden" name='url' value={image} />
          </ImageInputContainer>

            <FormContainer action={updateProductAction}>
              <div className='grid gap-4 md:grid-cols-2 my-4'>
                <input type="hidden" name='id' value={id} />
                <FormInput
                type='text'
                name='name'
                label='Product name'
                dafultValue={name}
                />
                <PriceInput defaultValue={price}/>
                
                <TextAreaInput 
                name='description'
                labelText='description'
                defaultValue={description}
                />
                <div className='mt-6'>
                  <ChekBoxInput name='featured' label='featured' defaultChecked={featured}/>
                </div>
                <Buttons text='Update Product' className='mt-6' />
              </div>
            </FormContainer>
          </div>
          
     
        </section>
  )
}

export default EditProductPage