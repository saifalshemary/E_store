import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card';
import Rating from './Rating';
import Image from 'next/image';
import Comment from './comment';

type props ={
  review_info: {
    comment: string,
    name: string,
    rating: number,
    image: string,
  }
  chidren?: React.ReactNode
}

function ReviewCard({review_info,chidren}:props) {

  const { comment , name , rating , image} = review_info;

  // console.log(image , "review info in review card")
  return (
  
    <Card>
      <CardHeader >
        <div className='flex items-center gap-4'>
          <Image 
            src={image}
            alt= {name}
            width={44}
            height={44}
            className='w-12 h-12  rounded-full capitalize mb-1'
          />
          <div >
            <h3 className='text-sm font-bold capitalize mb-1'>
              {name}
            </h3>
            <Rating rating={rating}/>
          </div>
        </div>

      </CardHeader>
      <CardContent>
        {comment}
      </CardContent>
      <div>{chidren}</div>
    </Card>
  )
}

export default ReviewCard