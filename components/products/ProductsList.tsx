import type { product } from '@prisma/client';

import Link from 'next/link';
import React from 'react';
import { links } from '../../utils/links';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { formatCurrency } from '../../utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({Products}:{Products:product[]}) {
  return (
    <section className='mt-12 grid gap-y-8'>
      {
       Products.map((item)=>{

      const {name, price ,image ,id ,description} = item;
      const PriceFomat = formatCurrency(price)
       
       return(
         <div className='relative group' key={id}>
        <Link href={`${links.PRODUCTS.href}/${id}`}>
          <Card className='transform group-hover:shadow-lg transitions-shadow duratin-500'>
            <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
              <div className='relative h-64 md:h-48 md:w-48'>
                <Image 
                src={image}
                alt=''
                className='object-cover rounded-lg'
                fill
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 33vw'

                />
              </div>
              <div>
                <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                <p className='text-muted-foreground mt-4'>{description}</p>
              </div>
              <div className='text-center flex gap-4 item-center md:flex-col justify-between text-lg text-semibold font-blue-200'>
                {PriceFomat}
                <div className='z-5'>
                  <FavoriteToggleButton productsId={id}/>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
          
        </div>
       )}
      )
      }
    </section>
  )
}

export default ProductsList