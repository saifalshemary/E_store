import React from 'react'
import { Button } from '../ui/button'

function AddToCart({productID}:{productID:string}) { // حذفت productID لأنه غير مستخدم
  return (
    <Button className='mt-8 capitalize' size={'lg'}>
      Add To Cart
    </Button>
  )
}

export default AddToCart