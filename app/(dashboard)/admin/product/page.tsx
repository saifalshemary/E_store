import ChekBoxInput from '@/components/form/ChekBoxInput'
import React from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchAdminPosts } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import { Edit2 } from 'lucide-react';
import { links } from '@/utils/links';
import IconButton from '@/components/admin/products/iconButton';
import { deleteProduct } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';


async function ProductPage() {

  const getPosts = await fetchAdminPosts();
  const cuntProduct = getPosts.length;

  return (
   <section>
    <Table>
      <TableCaption>Total Product {cuntProduct}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Product Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead >Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          getPosts.map((product)=>{

            const { id , name , price , } = product;
            const priceFormat = formatCurrency(price);
            return(
              <TableRow key={id}>
                <TableCell >
                  <Link href={`${links.PRODUCTS.href}/${id}`} className='capitalize underline text-muted-foreground hover:text-white tracking-wide '>
                  {name}
                  </Link>
                </TableCell>
                <TableCell>{priceFormat} </TableCell>
                <TableCell className='flex gap-1 item-center'>
                  <Link href={`${links.ADMINPRODUCTS.href}/${id}/edit`}>
                    <IconButton ActionType='edit' />
                  </Link>
                   <DeleteProduct productID={id}/>
                </TableCell>  
             </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
   </section>
  )
}

export default ProductPage

function DeleteProduct({productID}:{productID:string}) {

    const delete_product = deleteProduct.bind(null , {productID});

    return(
      <FormContainer action={delete_product}>
          
      <IconButton ActionType='delete' />

    </FormContainer>
    )
}