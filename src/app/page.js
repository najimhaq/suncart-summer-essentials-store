import BannerAlt from './components/BannerAlt';
import FeatureProducts from './components/FeatureProducts';
import Hero from './components/Hero';
import PageWrapper from './components/PageWrapper';

export default function Home() {
  return (
    <>
      <div>
        <PageWrapper>
          <BannerAlt />
          <FeatureProducts />
          <Hero />
        </PageWrapper>
      </div>
    </>
  );
}
