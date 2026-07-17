import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

interface PriceInputProps {
    name?:string,
    defaultValue?:number
    
}
function PriceInput({name ,defaultValue}:PriceInputProps) {
  return (
    <div>
        <Label htmlFor='price' className='mb-4'>
        Price ($)
    </Label>

    <Input
        name= {name || 'price'}
        id={name || 'price'}
        type='number'
        defaultValue={defaultValue || 30}
    />
    </div>
  )
}

export default PriceInput