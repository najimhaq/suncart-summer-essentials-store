import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSun } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-mango via-wave to-sunset text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <Link
              href='/'
              className='flex items-center gap-3 mb-5 hover:scale-105 transition-all duration-300'
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
            <p className='text-dusk mb-8 max-w-md leading-relaxed'>
              Bangladesh’s best summer essentials store. Premium quality
              products delivered right to your doorstep.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-white/80'>
                <FaPhone className='w-5 h-5 text-sunset' />
                <span className='text-dusk'>+880 17XX-XXXXXX</span>
              </div>
              <div className='flex items-center gap-3 text-white/80'>
                <FaEnvelope className='w-5 h-5 text-sunset' />
                <span className='text-dusk'>support@suncart.com</span>
              </div>
              <div className='flex items-center gap-3 text-white/80'>
                <FaMapMarkerAlt className='w-5 h-5 text-sunset' />
                <span className='text-dusk'>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-3 bg-white rounded-xl shadow-lg p-8 text-dusk'>
            <h2 className='text-2xl font-bold mb-6'>Get in Touch</h2>
            <form className='space-y-5'>
              <div>
                <label className='block text-sm font-medium mb-1'>Name</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>Email</label>
                <input
                  type='email'
                  className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                  placeholder='Your email'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Message
                </label>
                <textarea
                  rows='4'
                  className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                  placeholder='Write your message...'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full py-2 px-4 rounded-lg bg-gradient-to-r from-wave to-mango text-dusk font-semibold shadow hover:from-sunset hover:to-wave transition-all duration-300'
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
