import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSun } from 'react-icons/fa';

export const metadata = {
  title: 'Suncart - Contact',
};

const ContactPage = () => {
  return (
    <div className='px-4 py-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl rounded-3xl bg-linear-to-br from-mango via-wave to-sunset text-white'>
        <div className='grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-12'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <Link
              href='/'
              className='mb-5 flex items-center gap-3 transition-all duration-300 hover:scale-105'
            >
              <div className='flex h-11 w-11 items-center justify-center rounded-full border border-sunset/30 bg-white/70 text-sunset shadow-sm'>
                <FaSun className='h-7 w-7 text-sunset' />
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

            <p className='mb-8 max-w-md leading-relaxed text-dusk'>
              Bangladesh&apos;s best summer essentials store. Premium quality
              products delivered right to your doorstep.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-white/80'>
                <FaPhone className='h-5 w-5 text-sunset' />
                <span className='text-dusk'>+880 1717-791817</span>
              </div>
              <div className='flex items-center gap-3 text-white/80'>
                <FaEnvelope className='h-5 w-5 text-sunset' />
                <span className='text-dusk'>support@suncart.com</span>
              </div>
              <div className='flex items-center gap-3 text-white/80'>
                <FaMapMarkerAlt className='h-5 w-5 text-sunset' />
                <span className='text-dusk'>Khulna, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='rounded-2xl bg-white p-8 text-dusk shadow-lg lg:col-span-3'>
            <h2 className='mb-6 text-2xl font-bold'>Get in Touch</h2>
            <form className='space-y-5'>
              <div>
                <label className='mb-1 block text-sm font-medium'>Name</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-mango'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='mb-1 block text-sm font-medium'>Email</label>
                <input
                  type='email'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-mango'
                  placeholder='Your email'
                />
              </div>
              <div>
                <label className='mb-1 block text-sm font-medium'>
                  Message
                </label>
                <textarea
                  rows='4'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-mango'
                  placeholder='Write your message...'
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-linear-to-r from-wave to-mango px-4 py-3 font-semibold text-dusk transition-all duration-300 hover:from-sunset hover:to-wave'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
