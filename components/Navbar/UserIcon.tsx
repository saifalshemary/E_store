import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { LuUser } from 'react-icons/lu';

async function UserIcon() {

const user = await currentUser();

const profile_img = user?.imageUrl;

  if(profile_img){

    return (
      
    <div>
      <img
      src={profile_img}
      alt='user profile image'
      className='w-6 h-6 rounded-full object-cover'/>
    </div>
  )
}


return(

  <LuUser className='w-8 h-8 rounded-full object-cover bg-blue-700'/>
)
 
}

export default UserIcon