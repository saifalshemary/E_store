import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function LoadingTables({row=4}) {

  const five = Array.from({ length: row }).map((_, index) => (
    <div key={index} className='mb-4'>
        <Skeleton className='w-full h-8 rounded'/>
    </div>
  ))

  return (
  <>{five}</>
  )
}

export default LoadingTables