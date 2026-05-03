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
        {/* Background Elements */}
        <div className='absolute inset-0 bg-linear-to-br from-mango/20 via-sunset/10 to-wave/20' />

        {/* Animated Background Blobs */}
        <div className='absolute top-20 right-20 w-64 h-64 bg-mango/20 rounded-full blur-3xl animate__animated animate__fadeIn animate__slow' />
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-wave/10 rounded-full blur-3xl animate__animated animate__fadeIn animate__slower' />

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-8'>
              {/* Badge */}
              <div className='animate__animated animate__fadeInDown'>
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-wave/70 text-dusk rounded-full text-sm font-medium mb-6'>
                  <Sparkles className='w-4 h-4' />
                  Summer Collection 2025
                </div>

                {/* Heading */}
                <h1 className='text-5xl md:text-7xl font-bold text-dusk leading-tight animate__animated animate__fadeInLeft'>
                  Make Your <span className='font-script'>Summer</span> <br />
                  <span className='text-transparent bg-clip-text bg-linear-to-r from-mango to-sunset'>
                    More Colorful
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className='animate__animated animate__fadeInUp animate__delay-1s text-lg text-dusk/70 max-w-lg'>
                At SunCart, you&apos;ll find the best quality sunglasses, beach
                accessories, skincare products, and trendy summer outfits. Make
                yourself special this summer.
              </p>

              {/* Features List */}
              <div className='space-y-3'>
                {features.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 text-dusk/80 animate__animated animate__fadeInLeft animate__delay-${index + 1}s`}
                  >
                    <span className='w-2 h-2 bg-sunset rounded-full animate__animated animate__pulse animate__infinite' />
                    {item}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex flex-wrap gap-4 pt-4'>
                <Link
                  href='/products'
                  className='group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-sunset to-mango text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn animate__delay-1s'
                >
                  Start Shopping
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Link>

                <Link
                  href='/products?category=new'
                  className='inline-flex items-center gap-2 px-8 py-4 border-2 border-wave/30 text-dusk font-semibold rounded-full hover:border-wave hover:text-wave hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn animate__delay-1s'
                >
                  New Collection
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className='hidden lg:block relative'>
              <div className='relative w-full aspect-square animate__animated animate__fadeInRight animate__delay-1s'>
                {/* Background Shape */}
                <div className='absolute inset-0 bg-linear-to-br from-mango/30 to-sunset/30 rounded-3xl transform rotate-3 animate__animated animate__pulse animate__infinite animate__slower' />

                {/* Main Image */}
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

                {/* Floating Card */}
                <div className='absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 animate__animated animate__bounceIn animate__delay-2s'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-wave/20 rounded-full flex items-center justify-center animate__animated animate__pulse animate__infinite'>
                      <span className='text-2xl'>🌟</span>
                    </div>
                    <div>
                      <p className='font-bold text-dusk text-lg'>5000+</p>
                      <p className='text-sm text-dusk/60'>Happy Customers</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className='absolute -top-6 -right-6 bg-sunset text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg animate__animated animate__rubberBand animate__delay-3s animate__infinite'>
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
