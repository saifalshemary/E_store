import React, { Suspense } from 'react';
import HeroCarousel  from './HeroCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';
import {LodingHero} from '../global/LodingContainer';
import { links } from '@/utils/links';
function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 item-center gap-24 pt-24'>
      <div>
        <h1 className='max-w-2xl bg-red font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 text-lg max-w-xl leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Cumque et voluptas saepe 
           in quae voluptate, laborum maiores possimus 
           illum reprehenderit aut delectus veniam cum 
           perferendis unde sint doloremque non nam.
        </p>

        <Button asChild className='mt-8 text-white bg-blue-500' size={'lg'}>
            <Link href={links.PRODUCTS.href}>
                Our Products
            </Link>
        </Button>
      </div>

      <Suspense fallback={<LodingHero/>}>
        <HeroCarousel/>
      </Suspense>
    </section>

    
  )
}

export default Hero