import { toggleFavAction } from '@/utils/actions';
// import { usePathname } from 'next/navigation'
import React from 'react'
import FormContainer from '../form/FormContainer';
import CardSubmitButton from '../form/CardSubmitButton';


 type toggleFavParamsProps = {
    productID:string,
    favoriteID:string | null,
  }

function FavoriteToggleForm({productID,favoriteID}:toggleFavParamsProps) {

  const pathname = '/';
  const toggleAction = toggleFavAction.bind(null,{productID,favoriteID,pathname});

  return (
     <FormContainer action={toggleAction}>
        <CardSubmitButton isfav={favoriteID ? true : false } />
     </FormContainer>    
  )
}

export default FavoriteToggleForm