'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ShoppingBag,
  Home,
  Package,
  Phone,
  ArrowLeft,
  Search,
} from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-sand/20 via-white to-sunset/5 flex items-center justify-center px-4 py-20'>
      <div className='max-w-2xl w-full mx-auto text-center'>
        <div className='relative mb-8'>
          <div className='text-[120px] md:text-[180px] font-bold leading-none'>
            <span className='bg-gradient-to-r from-sunset via-mango to-sunset bg-clip-text text-transparent animate-pulse'>
              4
            </span>
            <span className='bg-gradient-to-r from-sunset via-mango to-sunset bg-clip-text text-transparent animate-pulse delay-100'>
              0
            </span>
            <span className='bg-gradient-to-r from-sunset via-mango to-sunset bg-clip-text text-transparent animate-pulse delay-200'>
              4
            </span>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10'>
            <ShoppingBag className='w-48 h-48 md:w-64 md:h-64 text-sunset' />
          </div>
        </div>

        <h1 className='text-3xl md:text-4xl font-bold text-dusk mb-4'>
          Oops! Page Not Found
        </h1>

        <p className='text-dusk/70 text-lg mb-6 max-w-md mx-auto'>
          Looks like you've wandered off the sunny path. The page you're looking
          for doesn't exist or has been moved.
        </p>


        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sunset text-white font-semibold hover:bg-sunset/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg'
          >
            <Home className='w-4 h-4' />
            Back to Home
          </Link>

          <Link
            href='/products'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-sunset text-sunset font-semibold hover:bg-sunset hover:text-white transition-all duration-300'
          >
            <Package className='w-4 h-4' />
            Browse Products
          </Link>

          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-dusk/20 text-dusk/80 font-semibold hover:bg-white/70 hover:border-sunset/50 transition-all duration-300'
          >
            <Phone className='w-4 h-4' />
            Contact Support
          </Link>
        </div>

     
        <div className='mt-12 pt-8 border-t border-dusk/10'>
          <p className='text-dusk/60 text-sm mb-4'>You might be looking for:</p>
          <div className='flex flex-wrap gap-3 justify-center'>
            {[
              'Summer Collection',
              'New Arrivals',
              'Best Sellers',
              'Sale Items',
            ].map((item) => (
              <Link
                key={item}
                href={`/products?category=${item.toLowerCase().replace(' ', '-')}`}
                className='px-4 py-2 rounded-full bg-white/50 text-dusk/70 text-sm hover:bg-sunset/10 hover:text-sunset transition-all duration-300 border border-dusk/10'
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* ফান ফ্যাক্ট */}
        <div className='mt-8 text-center text-dusk/40 text-xs'>
          <p>✨ Every summer has a story - let's find yours instead! ✨</p>
        </div>
      </div>
    </div>
  );
}
