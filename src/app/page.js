import BannerAlt from './components/BannerAlt';
import Categories from './components/Categories';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <BannerAlt />
        <Categories />
        <Hero />
      </div>
    </>
  );
}
