'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Droplets, ArrowRight, ArrowDown } from 'lucide-react';
import 'animate.css';
import bannerImage from '@/app/assets/images/banner.png';
import PageWrapper from './PageWrapper';

export default function Banner() {

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-products');
    if (featuredSection) {
      featuredSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className='my-8'>
      <PageWrapper>
        <div className='relative overflow-hidden rounded-3xl'>

          <div className='relative min-h-80 md:min-h-100'>
            <Image
              src={bannerImage}
              alt='Suncart Sunscreen SPF 50+'
              fill
              priority
              sizes='(max-width: 768px) 100vw, 1200px'
              className='object-cover'
            />

            <div className='absolute inset-0 bg-linear-to-r from-dusk/80 via-dusk/50 to-transparent' />

        
            <div className='relative flex h-full items-center px-6 py-10 md:px-12 lg:px-20 animate__animated animate__fadeInUp'>
              <div className='max-w-xl space-y-4'>
                <div className='space-y-2'>
                  <p className='ml-4 text-base font-semibold text-yellow-300 tracking-widest animate__animated animate__pulse animate__infinite'>
                    Hot Deals 🔥
                  </p>
                  <h3 className='text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s'>
                    <span className='bg-linear-to-r from-wave via-sunset to-yellow-400 bg-clip-text text-transparent'>
                      Summer Sale 50% OFF
                    </span>
                  </h3>
                </div>

                <h1 className='text-2xl font-bold text-white md:text-4xl animate__animated animate__fadeInDown animate__delay-1s'>
                  SUNSCREEN
                </h1>

                <div className='space-y-2 animate__animated animate__fadeInUp animate__delay-1s'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <span className='text-3xl font-bold text-mango md:text-4xl'>
                      SPF 50+
                    </span>
                    <span className='text-xl text-white/80'>|</span>
                    <span className='text-xl font-semibold text-white/90'>
                      PA+++++
                    </span>
                  </div>

                  <div className='flex items-center gap-2 text-white/80 text-sm'>
                    <Shield className='h-4 w-4 text-mango' />
                    <span>UVA/UVB Protection</span>
                    <Droplets className='ml-2 h-4 w-4 text-wave' />
                  </div>
                </div>

                <p className='max-w-md text-white/70 text-sm animate__animated animate__fadeInUp animate__delay-1s'>
                  Complete sun protection for face and body. Water-resistant,
                  dermatologist-tested formula.
                </p>

                <div className='flex items-center gap-4 animate__animated animate__zoomIn animate__delay-2s'>
                  <div>
                    <p className='text-2xl font-bold text-white'>200ml</p>
                    <p className='text-xs text-white/50'>Net content</p>
                  </div>

                  <div className='h-10 w-px bg-white/30' />

                  <div>
                    <p className='text-xl font-bold text-mango'>$49</p>
                    <p className='text-xs text-white/40 line-through'>$99</p>
                  </div>
                </div>

                <div className='flex flex-wrap gap-3 animate__animated animate__fadeInUp animate__delay-2s'>
                  <Link
                    href='/products'
                    className='inline-flex items-center gap-2 rounded-full bg-linear-to-r from-mango to-sunset px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm'
                  >
                    Shop Now
                    <ArrowRight className='h-3.5 w-3.5' />
                  </Link>

                  <button
                    onClick={scrollToFeatured}
                    className='group inline-flex items-center gap-2 px-6 py-2.5 bg-white/80 backdrop-blur-sm text-sunset font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 border-2 border-sunset/30 text-sm animate__animated animate__zoomIn animate__delay-1s animate__bounce'
                  >
                    <span>🔥 Hot Deals</span>
                    <ArrowDown className='w-4 h-4 group-hover:translate-y-1 transition-transform duration-300 animate__animated animate__bounce animate__infinite' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
