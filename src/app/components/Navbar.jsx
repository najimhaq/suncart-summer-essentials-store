
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import authClient from '../lib/auth-clint';
import AvatarPage from './AvatarPage';
import { toast } from 'react-toastify';
import { FaSun } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'My Profile', path: '/my-profile' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const result = authClient.useSession();
  const user = result.data?.user;

  const router = useRouter();
  const handleSignOut = async (e) => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Account signout Successsfully');
          setTimeout(() => {
            router.push('/signin');
          }, 1500);
        },
      },
    });
  };

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
        <nav className='mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-sand/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)]'>
          <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
            <Link href='/' className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full border border-sunset/30 bg-white/70 text-sunset shadow-sm'>
                <FaSun className='w-7 h-7 text-sunset' />
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
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-3 hover:scale-105 transition-all duration-300'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-full border border-sunset/30 bg-white/70 text-sunset shadow-sm'>
              <FaSun className='w-7 h-7 text-sunset' />
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


          <div className='hidden items-center gap-3 md:flex'>
            {!user && (
              <>
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
                  href='/signup'
                  className='rounded-full bg-gradient-to-r from-sunset to-mango px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition duration-300 hover:scale-105 hover:shadow-lg'
                >
                  Sign Up
                </Link>
              </>
            )}
            {user && (
              <>
                <div className='flex items-center gap-2'>
                  <p className='mr-2 text-sm font-medium text-dusk'>
                    Hello {user?.name?.split(' ')[0]}
                  </p>
                  <div className='avatar'>
                    <AvatarPage
                      name={user?.name}
                      image={user?.image}
                      referrerPolicy='no-referrer'
                      size={40}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className='rounded-full border border-sunset bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-sunset transition duration-300 hover:bg-sunset hover:text-white'
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='space-y-3 px-4 pb-6 pt-4'>
            {/* Navigation Links */}
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

            {/* Mobile Auth Section - Divider */}
            <div className='my-4 border-t border-dusk/10'></div>

            {/* Mobile Auth Buttons */}
            {!user ? (
              <div className='space-y-3'>
                <Link
                  href='/signin'
                  onClick={() => setMenuOpen(false)}
                  className='block w-full rounded-xl border border-sunset bg-transparent px-4 py-3 text-center text-sm font-semibold text-sunset transition hover:bg-sunset hover:text-white'
                >
                  Sign In
                </Link>
                <Link
                  href='/signup'
                  onClick={() => setMenuOpen(false)}
                  className='block w-full rounded-xl bg-gradient-to-r from-sunset to-mango px-4 py-3 text-center text-sm font-semibold text-white transition hover:scale-105'
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className='space-y-3'>
                {/* User Info */}
                <div className='flex items-center gap-3 rounded-xl border border-dusk/10 bg-white/40 p-4'>
                  <AvatarPage
                    name={user?.name}
                    image={user?.image}
                    referrerPolicy='no-referrer'
                    size={50}
                  />
                  <div>
                    <p className='font-semibold text-dusk'>{user?.name}</p>
                    <p className='text-xs text-dusk/60'>{user?.email}</p>
                  </div>
                </div>

                {/* Sign Out Button */}
                <button
                  onClick={() => {
                    handleSignOut();
                    setMenuOpen(false);
                  }}
                  className='block w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
