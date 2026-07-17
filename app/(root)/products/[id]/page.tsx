

import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react';
import AddToCart from '@/components/single-product/AddToCart';
import { fetchSinglProducts } from '@/utils/actions';
import BreadCrumbs from '@/components/single-product/BrandCrumbs';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductRating from '@/components/single-product/ProductRating';
import ButtonShare from '@/components/admin/products/ButtonShare';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';



async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const product = await fetchSinglProducts(id);
    const dollarAmount = formatCurrency(product.price);

    return (
      <>
      <section>
        <BreadCrumbs name={product.name} />
        <section className="grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-12">
          {/* Image */}
          <div className="relative h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-x-4 items-center">
              <h2 className="capitalize text-3xl font-bold">{product.name}</h2>
              <FavoriteToggleButton productsId={product.id} />
              <ButtonShare id={product.id} name={product.name}/>
            </div>
            <ProductRating productID={product.id} />
            <h4 className="text-md p-2 mt-3 rounded-md bg-muted inline-block">{dollarAmount}</h4>
            <p className="mt-6 text-md leading-8">{product.description}</p>
            <AddToCart productID={product.id} />
          </div>
        </section>
      </section>
      <ProductReviews productId={id}/>
      <SubmitReview id={id}/> 
      </>
    );
  } catch (error) {
    // Handle the error (like redirecting or showing a 404 page)
    return (
      <section>
        <h1>Product Not Found</h1>
      </section>
    );
  }
}

export default ProductDetailsPage;
