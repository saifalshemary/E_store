import React from 'react'
import SectionTitle from '../global/SectionTitle'
import ReviewCard from './ReviewCard'
import { fetchProductReviews } from '@/utils/actions'

async function ProductReviews({productId}: {productId:string}) {
  const reviews = await fetchProductReviews(productId);
    
  console.log(reviews, "product reviews")
  return (
    <div className='mt-16'>
      <SectionTitle text='ProductReviews' />

      <div className='grid gap-6 mt-8 md:grid-cols-2'>
        {
          reviews.map((rev) =>{

            const { comment , authorName , rating , authorImageUrl} = rev;

            const review_info = {
              comment,
              name:authorName,
              rating,
              image:authorImageUrl
            }

            return <ReviewCard key={rev.id} review_info={review_info} />
          })
        }
      </div>
    </div>
  )
}

export default ProductReviews