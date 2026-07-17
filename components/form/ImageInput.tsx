import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput({name}: {name:string}) {
  return (
    <div>
        <Label htmlFor={name } className='mb-4'>
            Image
        </Label>
        <Input 
        id={name}
        name={name}
        type='file'
        required
        accept='image/*'
        />
    </div>
  )
}

export default ImageInput