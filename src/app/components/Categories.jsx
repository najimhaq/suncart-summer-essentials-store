import { FaToolbox, FaTshirt } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { MdOutlineFace4 } from 'react-icons/md';
import { VscLayoutSidebarLeftDock } from 'react-icons/vsc';

const categories = [
  { name: 'Accessories', icon: FaToolbox, featured: false },
  { name: 'Footwear', icon: GiFootprint, featured: false },
  { name: 'Skincare', icon: MdOutlineFace4, featured: false },
  { name: 'Outdoor', icon: VscLayoutSidebarLeftDock, featured: false },
  { name: 'Clothing', icon: FaTshirt, featured: false },
];

const Categories = () => {
  return (
    <section className='pt-4  px-4 md:px-8 lg:px-12'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-dusk'>Shop by Category</h2>
        <p className='mt-1 text-sm text-dusk/70'>
          Explore essentials picked for your lifestyle
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6'>
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`group rounded-3xl border p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                item.featured
                  ? 'bg-sunset text-sand border-sunset'
                  : 'bg-sand text-dusk border-dusk/10 hover:border-sunset/30'
              }`}
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  item.featured ? 'bg-sand text-sunset' : 'bg-mango text-dusk'
                }`}
              >
                <Icon className='text-[26px]' />
              </div>

              <h3 className='text-sm sm:text-base font-semibold'>
                {item.name}
              </h3>
              <p
                className={`mt-1 text-xs ${
                  item.featured ? 'text-sand/80' : 'text-dusk/60'
                }`}
              >
                Explore now
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
