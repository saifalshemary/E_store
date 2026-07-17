import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

interface TextAreaInputProps {
    name:string,
    labelText?:string,
    defaultValue?:string
}
function TextAreaInput({name , labelText, defaultValue}:TextAreaInputProps)  {
  return (
    <div>
        <Label htmlFor={name } className='mb-4'>
        {labelText || name}
        </Label>
        <Textarea 
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
        className='leading-loose'
        />
    </div>
  )
}

export default TextAreaInput