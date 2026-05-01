'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Droplets, ArrowRight } from 'lucide-react';
import 'animate.css';
import bannerImage from '@/app/assets/images/banner.png';

export default function Banner() {
  return (
    <section className='relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8'>
      <div className='relative min-h-125 md:min-h-150'>
        <Image
          src={bannerImage}
          alt='Suncart Sunscreen SPF 50+'
          fill
          priority
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover'
        />

        <div className='absolute inset-0 bg-linear-to-r from-dusk/80 via-dusk/50 to-transparent' />

        <div className='relative h-full flex items-center px-6 md:px-12 lg:px-20 py-16 animate__animated animate__fadeInUp'>
          <div className='max-w-xl space-y-6'>
            <div className='text-mango font-script font-semibold tracking-wide text-xl animate__animated animate__fadeInDown'>
              Suncart
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white animate__animated animate__fadeInDown animate__delay-1s'>
              SUNSCREEN
            </h1>

            <div className='space-y-3 animate__animated animate__fadeInUp animate__delay-1s'>
              <div className='flex items-center gap-3 flex-wrap'>
                <span className='text-4xl md:text-5xl font-bold text-mango'>
                  SPF 50+
                </span>
                <span className='text-white/80 text-2xl'>|</span>
                <span className='text-2xl font-semibold text-white/90'>
                  PA+++++
                </span>
              </div>

              <div className='flex items-center gap-3 text-white/80'>
                <Shield className='w-5 h-5 text-mango' />
                <span>UVA/UVB Protection</span>
                <Droplets className='w-5 h-5 text-wave ml-2' />
              </div>
            </div>

            <p className='text-white/70 max-w-md animate__animated animate__fadeInUp animate__delay-1s'>
              Complete sun protection for face and body. Water-resistant,
              dermatologist-tested formula.
            </p>

            <div className='flex items-center gap-4 animate__animated animate__zoomIn animate__delay-2s'>
              <div>
                <p className='text-3xl font-bold text-white'>200ml</p>
                <p className='text-white/50 text-sm'>Net content</p>
              </div>

              <div className='w-px h-12 bg-white/30' />

              <div>
                <p className='text-2xl font-bold text-mango'>৳1,299</p>
                <p className='text-white/40 text-sm line-through'>৳1,799</p>
              </div>
            </div>

            <Link
              href='/products'
              className='inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-mango to-sunset text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s'
            >
              Shop Now
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
