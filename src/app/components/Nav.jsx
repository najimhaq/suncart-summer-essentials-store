'use client';

import { useState } from 'react';
import Link from 'next/link';
import 'animate.css';
import { Sun, ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'My Profile', href: '/my-profile' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-sand/90 animate__animated animate__fadeInDown'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link
            href='/'
            className='flex items-center gap-2 group animate__animated animate__fadeInDown'
          >
            <Sun className='w-8 h-8 text-sunset transition-transform duration-500 group-hover:rotate-180' />
            <span className='font-bold text-2xl text-dusk font-script'>
              Sun<span className='text-sunset'>Cart</span>
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-8 animate__animated animate__fadeInDown'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-dusk/80 hover:text-wave transition-colors duration-300 relative group'
              >
                {link.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-wave transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </div>

          <div className='flex items-center gap-4'>
            <Link
              href='/cart'
              className='relative p-2 hover:bg-sand rounded-full transition-colors animate__animated animate__fadeInRight'
            >
              <ShoppingCart className='w-5 h-5 text-dusk' />
              <span className='absolute -top-1 -right-1 w-5 h-5 bg-sunset text-white text-xs rounded-full flex items-center justify-center font-bold'>
                3
              </span>
            </Link>

            <Link
              href='/signin'
              className='hidden md:flex items-center gap-2 px-4 py-2 bg-linear-to-r from-mango to-sunset text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn'
            >
              <User className='w-4 h-4' />
              Sign In
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 text-dusk'
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-sand border-t border-sand animate__animated animate__fadeInDown'>
          <div className='px-4 py-4 space-y-3'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='block py-2 text-dusk hover:text-wave font-medium transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href='/signin'
              className='block w-full text-center py-3 bg-linear-to-r from-mango to-sunset text-white rounded-full font-medium mt-4'
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
