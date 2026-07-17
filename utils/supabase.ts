import { createClient } from '@supabase/supabase-js'


const buket = 'store_img';
const supabase = createClient(
    process.env.SUPABASE_URL as string, 
    process.env.SUPABASE_KEY as string,
)
  


export const uploadImage = async (image:File)=>{
    const timestamp = Date.now();
    console.log(timestamp)
    const newName = `${timestamp}-${image.name}`;

    const {data,error} = await supabase
                        .storage
                        .from(buket)
                        .upload(newName,image,
                        {cacheControl:'3600'})
    
    if (error) {
        console.log('Supabase error:', error);
        throw new Error(error.message);
    }

    return supabase.storage.from(buket).getPublicUrl(newName).data.publicUrl;

    
}

export const deleteImage = (url:string)=>{
    const imageName = decodeURIComponent(url.split("/").pop() as string);
    if(!imageName) throw new Error('Invalid URL');

    return supabase.storage.from(buket).remove([imageName])
}

