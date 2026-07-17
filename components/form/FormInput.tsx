import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';


interface FormInputProps {
    name: string;
    label?: string;
    type:string;
    placeholder?: string;
    dafultValue?: string ;
}

function FormInput({ name, label, type, placeholder, dafultValue }: FormInputProps) {

  return (
   <div>
    <Label htmlFor={name} className='capitalize mb-4'>
        {label || name}
    </Label>
    <Input 
    name={name} 
    id={name}
    type={type} 
    placeholder={placeholder} 
    defaultValue={dafultValue}
    
    />
   </div>
  )
}

export default FormInput