'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import 'animate.css';
import capImg from '@/app/assets/images/cap.png';

export default function Hero() {
  const features = [
    '☀️ Premium Sunglasses',
    '🏖️ Beach Accessories',
    '🧴 Sunscreen & Skincare',
    '👕 Trendy Summer Outfits',
  ];

  return (
    <section className='relative min-h-[90vh] flex items-center overflow-hidden rounded-3xl mx-4 md:mx-8 my-8'>
      <div className='absolute inset-0 bg-gradient-to-br from-mango/20 via-sunset/10 to-wave/20' />

      <div className='absolute top-20 right-20 w-64 h-64 bg-mango/20 rounded-full blur-3xl animate__animated animate__fadeIn animate__slower' />
      <div className='absolute bottom-20 left-20 w-96 h-96 bg-wave/10 rounded-full blur-3xl animate__animated animate__fadeIn animate__slower' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='animate__animated animate__fadeInDown'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-wave/70 text-dusk rounded-full text-sm font-medium mb-6'>
                <Sparkles className='w-4 h-4' />
                Summer Collection 2025
              </div>

              <h1 className='text-5xl md:text-7xl font-bold text-dusk leading-tight'>
                Make Your <span className='font-script'>Summer</span> <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-mango to-sunset'>
                  More Colorful
                </span>
              </h1>
            </div>

            <p className='animate__animated animate__fadeInUp animate__delay-1s text-lg text-dusk/70 max-w-lg'>
              At SunCart, you&apos;ll find the best quality sunglasses, beach
              accessories, skincare products, and trendy summer outfits. Make
              yourself special this summer.
            </p>

            <div className='space-y-3'>
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-dusk/80 animate__animated animate__fadeInLeft animate__delay-${index + 1}s`}
                >
                  <span className='w-2 h-2 bg-sunset rounded-full' />
                  {item}
                </div>
              ))}
            </div>

            <div className='flex flex-wrap gap-4 pt-4 animate__animated animate__zoomIn animate__delay-1s'>
              <Link
                href='/products'
                className='group inline-flex items-center gap-2 px-8 py-4 border-2 border-sunset/30 text-dusk font-semibold rounded-full shadow-lg hover:border-sunset hover:text-sunset hover:shadow-xl hover:scale-105 transition-all duration-300'
              >
                Start Shopping
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>

              <Link
                href='/products?category=new'
                className='inline-flex items-center gap-2 px-8 py-4 border-2 border-wave/30 text-dusk font-semibold rounded-full hover:border-wave hover:text-wave transition-all duration-300'
              >
                New Collection
              </Link>
            </div>
          </div>

          <div className='hidden lg:block relative animate__animated animate__fadeInRight'>
            <div className='relative w-full aspect-square'>
              <div className='absolute inset-0 bg-linear-to-br from-mango/30 to-sunset/30 rounded-3xl transform rotate-3' />

              <div className='absolute inset-0 bg-sand rounded-3xl shadow-2xl overflow-hidden'>
                <Image
                  src={capImg}
                  alt='Summer Collection'
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-contain'
                />
              </div>

              <div className='absolute -bottom-6 -left-6 bg-sand rounded-2xl shadow-xl p-4 animate__animated animate__zoomIn animate__delay-1s'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-wave/20 rounded-full flex items-center justify-center'>
                    <span className='text-2xl'>🌟</span>
                  </div>
                  <div>
                    <p className='font-bold text-dusk'>5000+</p>
                    <p className='text-sm text-dusk/60'>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
