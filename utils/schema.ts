import { file, z ,ZodSchema} from 'zod';

export const productSchema = z.object({


    name: z
    .string()
    .min(4 ,{
        message: "name must be at least 4 characters."
    })
    .max(40 ,{
        message: "name must be at than 40 characters."
    })
    ,
    
    description:
    z.string()
    .refine((description)=>{
        const wordCount = description.split(" ").length
        return wordCount >= 10 && wordCount <= 500 
    }, {
        message: "description must be between 10 and 500 words"
    } ),
    price: z.coerce.number().int().min(0,{
        message: "price must be positive number "
    }),
    featured: z.coerce.boolean()
})


export function validateSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
):T{
    const result = schema.safeParse(data);

    if(!result.success){
        const error = result.error.issues.map((e)=> e.message)
      throw new Error(error.join(','))
    }
    return result.data
}




export const imageSchema = z.object({
    image: validateImageFile()
});

function validateImageFile(){
    const imageSize = 5 * 1024*1024;
    const eccebtedFileType = ['image/']

    return z.instanceof(File)
    .refine((file)=>{
        return !file || file.size <= imageSize
    }, "File size must be less than 1 MB")

    .refine((file)=>{
        return !file || eccebtedFileType.some((type)=> file.type.startsWith(type)  )
    }, "File must be an image")
}


export const reviewSchema = z.object({
    rating: z.coerce.number()
    .min(1,{ message: "Rating must be at least 1 star" })
    .max(5,{ message: "Rating must be at most 5 stars" }),

    comment : z.string()
    .min(5, { message: "Comment must be at least 5 characters" })
    .max(500, { message: "Comment must be at most 500 characters" }),
    
    productId: z.string().refine((value)=> value !== '', { message: "Product ID is required" }),

    authorName  : z.string().refine((value)=> value !== '', { message: " authorName is required" }),

    authorImageUrl: z.string().refine((value)=> value !== '', { message: "authorImageUrl is required" }),



})

export const heroSchema = z.object({
  titile: z.string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(100, { message: "Title must be at most 100 characters." })
})