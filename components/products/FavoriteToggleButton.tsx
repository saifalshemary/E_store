
import React from 'react'
import CardSingButton from '../form/CardSingButton';
// import { useUser } from '@clerk/nextjs';
import FavoriteToggleForm from './FavoriteToggleForm';
import { auth } from '@clerk/nextjs/server';
import {fatchFavProducts} from '@/utils/actions';

async function FavoriteToggleButton({productsId}:{productsId:string}) {

  const {userId} = await auth();


  if(!userId) return <CardSingButton />
  const fatchID = await fatchFavProducts(productsId);


  return (
    <FavoriteToggleForm productID={productsId} favoriteID={fatchID} />
  )
}

export default FavoriteToggleButton