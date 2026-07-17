import React from 'react'
import { fetchUserFav } from '@/utils/actions'
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';

async function FavoritePage() {

  const favorite = await fetchUserFav();

   if(favorite.length === 0){
  return(
    <div>
    <SectionTitle text='No favorites yet!'/>
    </div>
    )
  }
  else{
    return(
      <div>
        <SectionTitle text='Your Favorites'/>
        <ProductsGrid products={favorite.map((value)=> value.product)}/>
      </div>
    )
  }

  return (
    <div>
        
    </div>
  )
}

export default FavoritePage