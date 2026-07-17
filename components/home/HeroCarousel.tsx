import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import  db  from '@/utils/db';
import Image from 'next/image';

async function HeroCarousel() {

  const hero = await db.hero.findMany();
  return (
  <Carousel>
      <CarouselContent>
        {
          hero.map((item)=>(
             <CarouselItem key={item.id}> 
            <div className='p-2 border-1 border-gray-100 rounded-lg '>
              <Image 
              src={item.image}
              width={400}
              height={400}
              priority
              alt='hero image'
              className='object-cover w-full h-[440px] rounded-md'
              />
            </div>
          </CarouselItem>
          ))
        }
          
         
      </CarouselContent>

      <CarouselPrevious />

      <CarouselNext />
</Carousel>
  )
}

export default HeroCarousel
  
          