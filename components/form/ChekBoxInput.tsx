import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label';

interface ChekBoxInputProps {
  name: string;
  defaultChecked?: boolean;
  label: string;
}

function ChekBoxInput({name, defaultChecked, label}:ChekBoxInputProps) {
  return (
    <div className='flex items-center gap-4 '>
      <Checkbox
        name={name}
        defaultChecked={defaultChecked}
        id={name}
      />
      <Label className='text-sm leading-none capitalize' htmlFor={name} >
        {label}
      </Label>
    </div>
  )
}

export default ChekBoxInput