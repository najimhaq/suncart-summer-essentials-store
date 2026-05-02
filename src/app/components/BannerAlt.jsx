'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Droplets, ArrowRight } from 'lucide-react';
import 'animate.css';
import bannerImage from '@/app/assets/images/banner.png';
import PageWrapper from './PageWrapper';

export default function Banner() {
  return (
    <section className='my-8'>
      <PageWrapper>
        <div className='relative overflow-hidden rounded-3xl bg-amber-500'>
          <div className='relative min-h-[520px] md:min-h-[620px]'>
            <Image
              src={bannerImage}
              alt='Suncart Sunscreen SPF 50+'
              fill
              priority
              sizes='(max-width: 768px) 100vw, 1200px'
              className='object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-r from-dusk/80 via-dusk/50 to-transparent' />

            <div className='relative flex h-full items-center px-6 py-16 md:px-12 lg:px-20 animate__animated animate__fadeInUp'>
              <div className='max-w-xl space-y-6'>
                <div className='space-y-4'>
                  <p className=' ml-4 text-lg font-semibold text-yellow-300 tracking-widest animate__animated animate__pulse animate__infinite'>
                    Hot Deals 🔥
                  </p>
                  <h3 className='text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s'>
                    <span className='bg-gradient-to-r from-wave via-sunset to-yellow-400 bg-clip-text text-transparent'>
                      Summer Sale 50% OFF
                    </span>
                  </h3>
                </div>

                <h1 className='text-3xl font-bold text-white md:text-5xl animate__animated animate__fadeInDown animate__delay-1s'>
                  SUNSCREEN
                </h1>

                <div className='space-y-3 animate__animated animate__fadeInUp animate__delay-1s'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <span className='text-4xl font-bold text-mango md:text-5xl'>
                      SPF 50+
                    </span>
                    <span className='text-2xl text-white/80'>|</span>
                    <span className='text-2xl font-semibold text-white/90'>
                      PA+++++
                    </span>
                  </div>

                  <div className='flex items-center gap-3 text-white/80'>
                    <Shield className='h-5 w-5 text-mango' />
                    <span>UVA/UVB Protection</span>
                    <Droplets className='ml-2 h-5 w-5 text-wave' />
                  </div>
                </div>

                <p className='max-w-md text-white/70 animate__animated animate__fadeInUp animate__delay-1s'>
                  Complete sun protection for face and body. Water-resistant,
                  dermatologist-tested formula.
                </p>

                <div className='flex items-center gap-4 animate__animated animate__zoomIn animate__delay-2s'>
                  <div>
                    <p className='text-3xl font-bold text-white'>200ml</p>
                    <p className='text-sm text-white/50'>Net content</p>
                  </div>

                  <div className='h-12 w-px bg-white/30' />

                  <div>
                    <p className='text-2xl font-bold text-mango'>$49</p>
                    <p className='text-sm text-white/40 line-through'>$99</p>
                  </div>
                </div>

                <Link
                  href='/products'
                  className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mango to-sunset px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeInUp animate__delay-2s'
                >
                  Shop Now
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
