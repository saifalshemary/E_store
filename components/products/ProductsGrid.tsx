import React from 'react';
import type { product } from '@prisma/client';
import { Card , CardContent } from '../ui/card';
import Link from 'next/link';
import { links } from '../../utils/links';
import Image from 'next/image';
import { formatCurrency } from '../../utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsGrid({products}:{products:product[]}) {
    
    

    return (
        <section className=' pt-12 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
            {
                products.map((product)=>{
                    const productsId = product.id;
                    const Dollar = formatCurrency(product.price)

                    return(
                        <div className='groub relative' key={product.id}>
                <Link href={`${links.PRODUCTS.href}/${productsId}`}>
                <Card className='transform groub-hover:shadow-xl transition-shadow duration-500'>
                    <CardContent>
                        <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                            <Image  
                          src={product.image} 
                          alt='products_img '
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className='object-cover'
                          />
                        </div>
                        <div className='text-center mt-4'>
                            <h2 className='text-lg capitalize'>{product.name}</h2>
                            <p className='text-muted-foreground mt-2'>
                                {Dollar}
                            </p>

                        </div>
                    </CardContent>
                </Card>
            </Link>
            <div className='absolute top-7 right-7 z-5'>
                <FavoriteToggleButton productsId={productsId}/>
            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ProductsGrid