import { notFound } from 'next/navigation';
import { getProductDetails } from '@/app/utils/data';
import ProductDetailsClient from '@/app/components/ProductDetailsClient';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
 const product = await getProductDetails(id);

   return {
     title: product.name,
     description: product.brand,
   };
};
export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
