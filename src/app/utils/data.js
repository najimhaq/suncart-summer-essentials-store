export async function getAllProducts() {
  try {
    const res = await fetch(
      'https://suncart-summer-essentials-store-ten.vercel.app/products.json',
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}


export async function getProductDetails(id) {
  try {
    const productId = parseInt(id);

    const res = await fetch(
      'https://suncart-summer-essentials-store-ten.vercel.app/products.json',
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch products:', res.status);
      return null;
    }

    const products = await res.json();
    const product = products.find((p) => p.id === productId);

    if (!product) {
      console.log(`Product with id ${productId} not found`);
      return null;
    }

    return {
      ...product,
      images: [product.image],
    };
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
}
