// app/components/Categories.jsx
'use client';

import { FaToolbox, FaTshirt } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { MdOutlineFace4 } from 'react-icons/md';
import { VscLayoutSidebarLeftDock } from 'react-icons/vsc';
import PageWrapper from './PageWrapper';

const categories = [
  { name: 'All', icon: null, featured: false }, // All বাটন যোগ করুন
  { name: 'Accessories', icon: FaToolbox, featured: false },
  { name: 'Footwear', icon: GiFootprint, featured: false },
  { name: 'Skincare', icon: MdOutlineFace4, featured: false },
  { name: 'Outdoor', icon: VscLayoutSidebarLeftDock, featured: false },
  { name: 'Clothing', icon: FaTshirt, featured: false },
];

const Categories = ({ onSelectCategory }) => {
  return (
    <section className='pt-4'>
      <PageWrapper>


        <div className='flex flex-wrap gap-4 justify-center'>
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() =>
                  onSelectCategory(item.name === 'All' ? 'all' : item.name)
                }
                className='group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-sunset/10 min-w-[80px]'
              >
                <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-mango text-dusk group-hover:bg-sunset group-hover:text-white transition-all'>
                  {Icon ? (
                    <Icon className='text-[22px]' />
                  ) : (
                    <span className='text-lg font-bold'>🎯</span>
                  )}
                </div>
                <h3 className='text-xs sm:text-sm font-semibold text-dusk'>
                  {item.name}
                </h3>
              </button>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
};

export default Categories;
