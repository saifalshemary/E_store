
import FormCreatHero from '@/components/admin/hero/FormCreatHero'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function page() {
  return (
    <div>
        <h2 className='text-2xl font-bold my-5 capitalize'>creat hero</h2>
        <Separator />

        <FormCreatHero />
    </div>
  )
}

export default page