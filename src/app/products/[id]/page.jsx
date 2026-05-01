// app/products/[id]/page.jsx
import { notFound } from 'next/navigation';
import { getProductDetails } from '@/app/utils/data';
import ProductDetailsClient from '@/app/components/ProductDetailsClient';


export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
