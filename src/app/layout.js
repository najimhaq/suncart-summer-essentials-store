import './globals.css';
import { Inter, Pacifico, Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

export const metadata = {
  title: 'Suncart',
  description: 'A modern summer eCommerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${pacifico.variable}`}
    >
      <body className='antialiased bg-[#f7f3eb] text-dusk'>
        <Navbar />
        <main className='container mx-auto flex-1 px-4 pt-28'>{children}</main>
        <Footer />
        <ToastContainer position='top-right' autoClose={2000} />
      </body>
    </html>
  );
}
