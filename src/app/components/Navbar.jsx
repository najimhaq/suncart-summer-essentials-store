// app/components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'My Profile', path: '/my-profile' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActivePath = (path) => {
    if (!pathname || typeof pathname !== 'string') {
      return false;
    }

    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path;
  };

  const isProductsPage = mounted && pathname === '/products';
  const isSignInPage = mounted && pathname === '/signin';

  if (!mounted) {
    return (
      <header className='fixed top-0 left-0 z-50 w-full'>
        <nav className='mx-auto mt-4 w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-sand/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)]'>
          <div className='flex items-center justify-between px-4 py-3 md:px-6 lg:px-8'>
            <Link href='/' className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full border border-sunset/30 bg-white/70 text-sunset shadow-sm'>
                <ShoppingBag className='h-5 w-5' />
              </div>
              <div className='leading-tight'>
                <h2 className='font-script text-2xl font-bold tracking-wide text-dusk'>
                  Sun<span className='text-sunset'>Cart</span>
                </h2>
                <p className='hidden text-[11px] uppercase tracking-[0.28em] text-dusk/60 sm:block'>
                  Summer Store
                </p>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
      <nav className='mx-auto mt-4 w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-sand/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)]'>
        <div className='flex items-center justify-between px-4 py-3 md:px-6 lg:px-8'>
          {/* লোগো */}
          <Link
            href='/'
            className='flex items-center gap-3 hover:scale-105 transition-all duration-300'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-full border border-sunset/30 bg-white/70 text-sunset shadow-sm'>
              <ShoppingBag className='h-5 w-5' />
            </div>
            <div className='leading-tight'>
              <h2 className='font-script text-2xl font-bold tracking-wide text-dusk'>
                Sun<span className='text-sunset'>Cart</span>
              </h2>
              <p className='hidden text-[11px] uppercase tracking-[0.28em] text-dusk/60 sm:block'>
                Summer Store
              </p>
            </div>
          </Link>

          {/* ডেস্কটপ নেভিগেশন */}
          <div className='hidden items-center gap-2 rounded-full border border-dusk/10 bg-white/40 px-2 py-2 md:flex'>
            {navLinks.map((link) => {
              const isActive = isActivePath(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-sunset text-white shadow-md'
                      : 'text-dusk/80 hover:bg-white/70 hover:text-wave'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ডেস্কটপ বাটন */}
          <div className='hidden items-center gap-3 md:flex'>
            <Link
              href='/signin'
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 ${
                isSignInPage
                  ? 'border-sunset bg-transparent text-sunset'
                  : 'border-sunset text-sunset hover:bg-sunset hover:text-white'
              }`}
            >
              Sign In
            </Link>
            <Link
              href='/products'
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 ${
                isProductsPage
                  ? 'border-sunset bg-transparent text-sunset'
                  : 'border-sunset bg-sunset text-white hover:bg-transparent hover:text-sunset'
              }`}
            >
              Shop Now
            </Link>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-dusk/10 bg-white/40 text-dusk md:hidden'
          >
            {menuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='space-y-2 px-4 pb-4 pt-2'>
            {navLinks.map((link) => {
              const isActive = isActivePath(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition ${
                    isActive
                      ? 'bg-sunset text-white'
                      : 'border border-dusk/10 bg-white/40 text-dusk/85 hover:bg-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
