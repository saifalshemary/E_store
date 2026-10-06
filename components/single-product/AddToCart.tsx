
'use client'
import React from 'react';

import BuyButton from './Buy';


function AddToCart({ productID }: { productID: string }) {
  return(
    <BuyButton productID={productID}/>
  )
}
export default AddToCart;