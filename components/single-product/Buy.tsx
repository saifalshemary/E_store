'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'


function BuyButton({productID}: {productID:string}) {

  const [loading , setLoading] = useState(false);
  const handleBuy = async () =>{
    setLoading(true)
    const res = await fetch('/api/checkout' ,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        productID: productID
      })
    })
    const data = await res.json();
    if(data.formUrl){
    window.location.href = data.formUrl;
    }else{
      alert('some thing went wrong');
      
    }
    setLoading(false);
  }
  

  return (
    <Button 
    className="mt-8 capitalize"
    size={'lg'}
    onClick={handleBuy}
    disabled={loading}>
      Buy Now
    </Button>
  );
}


export default BuyButton