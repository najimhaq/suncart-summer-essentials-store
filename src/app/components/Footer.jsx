import Link from 'next/link';
import {
  FaSun,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/products' },
      { name: 'Sunglasses', href: '/products?category=sunglasses' },
      { name: 'Skincare', href: '/products?category=skincare' },
      { name: 'Beach Accessories', href: '/products?category=beach' },
      { name: 'New Arrivals', href: '/products?category=new' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Order Tracking', href: '/track' },
      { name: 'Return Policy', href: '/returns' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
  };

  return (
    <footer className='bg-dusk text-white lg:px-18'>
      {/* Newsletter Section */}
      <div className='border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-2'>
                Subscribe to Newsletter
              </h3>
              <p className='text-white/60'>
                Get new collections and exclusive offers first
              </p>
            </div>
            <div className='flex w-full md:w-auto gap-3'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 md:w-80 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-mango'
              />
              <button className='px-6 py-3 bg-linear-to-r from-mango to-sunset text-white font-medium rounded-xl hover:shadow-lg transition-all'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <FaSun className='w-8 h-8 text-mango' />
              <span className='font-bold text-2xl'>
                Sun<span className='text-mango'>Cart</span>
              </span>
            </Link>
            <p className='text-white/60 mb-6 max-w-sm'>
              Bangladesh best summer essentials store. Premium quality products
              delivered right to your doorstep.
            </p>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-white/60'>
                <FaPhone className='w-5 h-5 text-mango' />
                <span>+880 1777-791817</span>
              </div>
              <div className='flex items-center gap-3 text-white/60'>
                <FaEnvelope className='w-5 h-5 text-mango' />
                <span>support@suncart.com</span>
              </div>
              <div className='flex items-center gap-3 text-white/60'>
                <FaMapMarkerAlt className='w-5 h-5 text-mango' />
                <span>Khulna, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-semibold text-lg mb-4'>Shop</h4>
            <ul className='space-y-3'>
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-white/60 hover:text-mango transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-lg mb-4'>Support</h4>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-white/60 hover:text-mango transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-lg mb-4'>Company</h4>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-white/60 hover:text-mango transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-white/40 text-sm'>
              © 2026 SunCart. All rights reserved.
            </p>
            <div className='flex items-center gap-4'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango hover:text-dusk transition-all'
              >
                <FaFacebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango hover:text-dusk transition-all'
              >
                <FaInstagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango hover:text-dusk transition-all'
              >
                <FaTwitter className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
