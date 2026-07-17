import React from 'react'

import { fetchAllProducts } from '../../utils/actions'
import { Button } from '../ui/button';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import {links} from '../../utils/links';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

async function ProductsContainer({layout,search}:{layout:string,search:string}) {

    const TotalProducts = await fetchAllProducts({search});
    const lengthProducs= TotalProducts.length;
    const SearchTerm = search? `&search=${search}`: '';
  

  return (
    <>
        <section>
            <div className='flex flec-row justify-between item-center'>
                <h4>
                    {lengthProducs} product{lengthProducs > 1 && 's'}
                </h4>
                <div className='flex gap-4'>

                    <Button asChild size={'icon'} variant={layout=== 'grid'? 'default' : 'outline'}>
                        <Link href={`${links.PRODUCTS.href}?layout=grid${SearchTerm}`}>
                            <LuLayoutGrid />
                        </Link>
                    </Button>

                    <Button asChild size={'icon'} variant={layout === 'list'? 'default': 'outline'}>
                        <Link href={`${links.PRODUCTS.href}?layout=list${SearchTerm}`}>
                            <LuList />
                        </Link>
                    </Button>
                </div>
            </div>
            <Separator className='mt-4'/>
        </section>

        <section>
            {
                lengthProducs === 0 ?(
                    <h5>Sorry , No Products Matched Your Search</h5>
                ):layout === 'grid' ?(
                    <ProductsGrid products={TotalProducts}/>
                ):(
                    <ProductsList Products={TotalProducts}/>
                )
            }
        </section>
    </>
  )
}

export default ProductsContainer