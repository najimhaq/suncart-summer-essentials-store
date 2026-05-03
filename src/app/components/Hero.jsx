'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import 'animate.css';
import capImg from '@/app/assets/images/cap.png';
import PageWrapper from './PageWrapper';

export default function Hero() {
  const features = [
    '☀️ Premium Sunglasses',
    '🏖️ Beach Accessories',
    '🧴 Sunscreen & Skincare',
    '👕 Trendy Summer Outfits',
  ];

  return (
    <section className='relative my-8 mx-8 overflow-hidden rounded-3xl'>
      <PageWrapper>
        <div className='absolute inset-0 bg-linear-to-br from-mango/20 via-sunset/10 to-wave/20' />

        <div className='absolute top-20 right-20 w-64 h-64 bg-mango/20 rounded-full blur-3xl animate__animated animate__fadeIn animate__slow' />
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-wave/10 rounded-full blur-3xl animate__animated animate__fadeIn animate__slower' />

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='grid lg:grid-cols-2 gap-8 items-center'>
            <div className='space-y-6'>
              <div className='animate__animated animate__fadeInDown'>
                <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-wave/70 text-dusk rounded-full text-xs font-medium mb-4'>
                  <Sparkles className='w-3 h-3' />
                  Summer Collection 2025
                </div>

                <h1 className='text-4xl md:text-6xl font-bold text-dusk leading-snug animate__animated animate__fadeInLeft'>
                  Make Your <span className='font-script'>Summer</span> <br />
                  <span className='text-transparent bg-clip-text bg-linear-to-r from-mango to-sunset'>
                    More Colorful
                  </span>
                </h1>
              </div>

              <p className='animate__animated animate__fadeInUp animate__delay-1s text-base text-dusk/70 max-w-lg'>
                At SunCart, you&apos;ll find the best quality sunglasses, beach
                accessories, skincare products, and trendy summer outfits. Make
                yourself special this summer.
              </p>

              <div className='space-y-2'>
                {features.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 text-sm text-dusk/80 animate__animated animate__fadeInLeft animate__delay-${index + 1}s`}
                  >
                    <span className='w-1.5 h-1.5 bg-sunset rounded-full animate__animated animate__pulse animate__infinite' />
                    {item}
                  </div>
                ))}
              </div>

              <div className='flex flex-wrap gap-3 pt-2'>
                <Link
                  href='/products'
                  className='group inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-sunset to-mango text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm animate__animated animate__zoomIn animate__delay-1s'
                >
                  Start Shopping
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>

                <Link
                  href='/products'
                  className='inline-flex items-center gap-2 px-6 py-2.5 border-2 border-wave/30 text-dusk font-semibold rounded-full hover:border-wave hover:text-wave hover:scale-105 transition-all duration-300 text-sm animate__animated animate__zoomIn animate__delay-1s'
                >
                  New Collection
                </Link>
              </div>
            </div>

            <div className='hidden lg:block relative'>
              <div className='relative w-full aspect-4/3 animate__animated animate__fadeInRight animate__delay-1s'>
                <div className='absolute inset-0 bg-linear-to-br from-mango/30 to-sunset/30 rounded-3xl transform rotate-3 animate__animated animate__pulse animate__infinite animate__slower' />

                <div className='absolute inset-0 bg-sand rounded-3xl shadow-2xl overflow-hidden animate__animated animate__zoomIn'>
                  <Image
                    src={capImg}
                    alt='Summer Collection'
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-contain hover:scale-110 transition-transform duration-700'
                  />
                </div>

                <div className='absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 animate__animated animate__bounceIn animate__delay-2s'>
                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-wave/20 rounded-full flex items-center justify-center animate__animated animate__pulse animate__infinite'>
                      <span className='text-xl'>🌟</span>
                    </div>
                    <div>
                      <p className='font-bold text-dusk text-base'>5000+</p>
                      <p className='text-xs text-dusk/60'>Happy Customers</p>
                    </div>
                  </div>
                </div>

                <div className='absolute -top-4 -right-4 bg-sunset text-white rounded-full px-3 py-1.5 text-xs font-bold shadow-lg animate__animated animate__rubberBand animate__delay-3s animate__infinite'>
                  Sale 50% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
