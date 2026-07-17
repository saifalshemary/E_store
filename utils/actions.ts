'use server';

import { redirect } from 'next/navigation';
import db from './db';
import { currentUser } from '@clerk/nextjs/server';
import { productSchema, validateSchema , imageSchema ,reviewSchema, heroSchema } from './schema';
import { deleteImage, uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';
import { links } from '@/utils/links'


export async function fetchFeaturedProducts() {
  
    const products = await db.product.findMany({
      where: {
        featured: true,
      }
    })
    
    return products;
  } 
    
export async function fetchAllProducts({search =''}:{search:string}) {
    const products = await db.product.findMany({

      where:{
        OR:[
          {
            name: { contains:search , mode:'insensitive'}
          }
        ]
      },

      orderBy: {
        createdAt: 'desc'
      }
    });
    return products;
  } 

export async function fetchSinglProducts(productID:string){
  const product = await db.product.findUnique({
    where :{
      id : productID.trim()
    },
  })
  if (!product) {
      redirect ('/products')
  }

  return product
}



const getAuthUser = async ()=>{
  const user = await currentUser() ;
  
  if(!user){
    return redirect("/")
  }
  return user
}
  

const renderError = (error:unknown):{message:string}=>{
  console.log(error)
  
  return {
    message:error instanceof Error ? error.message : "Unkown Error"
  }
}



export const createProductFunction = async (
  prevState:any,
  formData:FormData

) =>{


    const user = await getAuthUser();

  try {
    const rowData = Object.fromEntries(formData);  
    const file = formData.get('image') as File;

    const validateData = validateSchema(productSchema,rowData)

    const validateImage = validateSchema( imageSchema ,{image:file})
  
    const fullImagePath = await uploadImage(validateImage.image) ; 

    await db.product.create({
      data:{
        ...validateData,
        image : fullImagePath,
        clrekId:user.id
      }
    })

  }

  catch(error){
     return renderError(error)
    
  }

  return { message: "Product created successfully" };
  
 
}

const getAdminUser = async ()=>{

     const user = await getAuthUser();

    
     if(user.id !== process.env.ADMIN_USER_IDS) redirect ("/")
    
     return user;
 
}


export const fetchAdminPosts = async ()=>{
    await getAdminUser();
    const user = await getAuthUser();
    
    
    const product = await db.product.findMany({
      where:{
        clrekId:user.id
      },
      orderBy:{
        createdAt:'desc'
      }
    })
  return product
}

export const deleteProduct = async (prevState: {productID:string})=>{
    const{productID} = prevState;
    await getAdminUser();

   try{
    const product = await db.product.delete({
      where:{
        id:productID
      }
    });
    await deleteImage(product.image);
    return {message:'Product Removed'};
  }
    catch(e){
        return renderError(e);
    }
  }

export async function updateProductAction(prevState: any, formData: FormData) {

    
    await getAdminUser();

    try {
      const productID = formData.get('id') as string;
      const rowData = Object.fromEntries(formData);
      const validateData = validateSchema(productSchema, rowData);

  console.log(productID)

      await db.product.update({
        where:{
          id: productID
        },
        data:{
          ...validateData
        }

      })
      revalidatePath(`${links.ADMINPRODUCTS.href}`);

      return {message:"product updated successfully"};
    } 
    
    catch (e) {
      return renderError(e);
    }
    
      
  }

  export async function updateProductImageAction(prevState: any, formData: FormData) {

    await getAdminUser();
      

    try{
        const image = formData.get('image') as File;
        const productID = formData.get('id') as string;
        const oldImageUrl = formData.get('url') as string;

      const validateFile = validateSchema( imageSchema ,{image})
      const fullPath = await uploadImage(validateFile.image) 
      console.log(oldImageUrl)
      console.log(productID)
      

      await deleteImage(oldImageUrl);

      await db.product.update({
        where:{
          id: productID
        },
        data:{
          image: fullPath
        }
      })
      revalidatePath(`${links.ADMINPRODUCTS.href}/${productID}/edit`);

      return {message:"Product image updated successfully"};
    }
    catch(e){
      return renderError(e);
    }
  }

  export async function fatchFavProducts(productID:string) {
    const user = await getAuthUser();
    const fav = await db.favorite.findFirst({
      where:{
        productId: productID,
        clrekId:user.id
      },
      select:{
        id:true
      }
    })
    return fav?.id || null;
  }

  type toggleFavParamsProps = {
    productID:string,
    favoriteID:string | null,
    pathname:string,
  }

  export async function toggleFavAction(prevState:toggleFavParamsProps) {
    const user = await getAuthUser();
    const {productID,favoriteID,pathname} = prevState;
    
    //check if favoriteID exists
    try{
      if(favoriteID){
        //remove from favorites
        await db.favorite.delete({
          where:{
            id:favoriteID
          }
        })
    }

    else{
      //add to favorites
      await db.favorite.create({
        data:{
          productId: productID,
          clrekId: user.id
        }
      })
    }

    revalidatePath(pathname);

    return {message : favoriteID ? "Removed from favorites" : "Added to favorites"}

    }
    catch(e){
      return renderError(e);
    }
  }

  export async function fetchUserFav(){
    const user = await getAuthUser();
    const favs = await db.favorite.findMany({
        where:{
          clrekId:user.id
        },

        include:{
          product:true
        }
    })
    return favs;
  }

  export const createReviewAction = async (
    prevState:any,
    formData:FormData) =>{

        const user = await getAuthUser();
        

       try {
         const rowData = Object.fromEntries(formData);
         // يتحقق من صحة البيانات باستخدام المخطط المحدد
         const validateData = validateSchema(reviewSchema,rowData);


          await db.review.create({
            data:{
              ...validateData,
              clrekId:user.id
            }
          });
          revalidatePath(`/products/${validateData.productId}`);
      return {message:"Review submitted !"};

       
       }
       catch(error){
          return renderError(error)
       }

    }

  export const fetchProductReviews = async (productId:string) =>{
    const reviews = await db.review.findMany({
      where:{
        productId: productId
      },
      orderBy:{
        createdAt: 'desc'
      }
    })
    return reviews;
  }




  export const fetchProductReviewsByUser = async () =>{}
  export const deleteActionReviews = async () =>{}
  export const fetchProductRating = async () =>{}

  export async function createHeroAction(prevState: any, formData: FormData) {
    const user = await getAdminUser();

    try {
      const rawData = Object.fromEntries(formData);
      const file = formData.get('image') as File;

      const validateData = validateSchema(heroSchema, rawData);
      const validateImage = validateSchema(imageSchema, { image: file });

      const fullImagePath = await uploadImage(validateImage.image);

      await db.hero.create({
        data: {
          titile: validateData.titile,
          image: fullImagePath,
          clrekId: user.id,
        },
      });

    } catch (error) {
      return renderError(error);
    }

    return { message: "Hero created successfully!" };
  }