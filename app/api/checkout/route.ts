import db from '@/utils/db'
import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'


export const POST = async (req:Request)=>{
  const requestId = randomUUID()
  const {productID} = await req.json()
 
 if (!productID || typeof productID !== 'string') {
    return NextResponse.json({ error: 'Invalid productID' }, { status: 400 })
  }
  const product = await db.product.findUnique({
    where: { id: productID },
    select: { price: true, name: true },
  })
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
 
  const order = await db.order.create({
    data:{
      qiRequsetId : requestId,
      amount : product.price,
      productName : product.name,
      status : 'PENDING',
      
    }
  })
  const auth = Buffer.from(`${process.env.QI_TERMINAL_USER}:${process.env.QI_TERMINAL_PASSWORD}`).toString('base64')

  const res = await fetch('https://uat-sandbox-3ds-api.qi.iq/api/v1/payment', {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization': `Basic ${auth}`,
      'X-Terminal-Id':'237984'
    },
    body:JSON.stringify({
      requestId:requestId,
      amount:product.price,
      currency:'IQD',
      locale:'ar',
      finishPaymentUrl: `http://localhost:3000/products`,
      notificationUrl: `http://localhost:3000/api/webhook/qicard`,
    })
  })
  const data = await res.json()

if (!res.ok) {
  console.error('Qi Card gateway error:', data)
  await db.order.updateMany({
    where: { qiRequsetId: requestId },
    data: { status: 'FAILED' },
    
  })
  return NextResponse.json({ error: 'Payment gateway error' }, { status: 502 })
}

return NextResponse.json(data)
}
    
    