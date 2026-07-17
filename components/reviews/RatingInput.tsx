import React from 'react'
import { Label } from '../ui/label'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { array, number } from 'zod'


function RatingInput({name,labelText}:{name:string,labelText?:string}) {
    const Numbers = Array.from({length:5},(_,i)=>{
        const value = i+1 
        return value.toString()
    }).reverse()
  return (
    <div className="mb-6 max-w-xs flex gap-2 items-center">
        <Label >
            {labelText || name}
        </Label>

        <Select  name={name} defaultValue={Numbers[0]}>
            <SelectTrigger >
               <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                {
                    Numbers.map((num)=>{
                        return(
                            <SelectItem value={num} key={num}>{num}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    
    </div>
  )
}

export default RatingInput