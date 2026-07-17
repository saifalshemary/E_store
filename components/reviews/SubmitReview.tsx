'use client'
import React from 'react'
import RatingInput from './RatingInput'
import { Card } from '../ui/card'
import FormContainer from '../form/FormContainer'
import { createReviewAction } from '@/utils/actions'
import { useUser } from '@clerk/nextjs'
import TextAreaInput from '../form/TextAreaInput'
import { Button } from '../ui/button'
import { useState } from 'react'
import Buttons from '../form/Buttons'

function SubmitReview({id}:{id:string}) {

    const {user} = useUser()
    const [isVisible,setIsVisible] = useState(false)
    return (
        <div className='mt-10'>
            <Button 
            onClick={()=> setIsVisible((prev)=> !prev)}
            > {isVisible? 'close' : 'leave Review'}</Button>
            {
                isVisible &&(
                    
                <div>
                    <Card className='p-8 my-10' >
                        <FormContainer action={createReviewAction} >
                            <input type="hidden" name={'productId'} value={id} />
                            <input type="hidden" name={'authorName'} value={user?.firstName || ''} />
                            <input type="hidden" name={'authorImageUrl'} value={user?.imageUrl || ''} />
                            <RatingInput name='rating' />
                            <TextAreaInput name= 'comment' labelText='FeedBadk' />
                            <Buttons className='mt-4'/>

                        </FormContainer>
                    </Card>
                </div>
                    )
            }
        </div>
  )
}

export default SubmitReview