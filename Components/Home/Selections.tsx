import { useRouter } from 'next/router';
import React from 'react';
import { PAGE_ROUTES } from '../../constants/config';
import { MdFastfood } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';
import { RiTaxiFill, RiShoppingBag2Fill } from 'react-icons/ri';
const AvailableSelections = [
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Food',
    icon: MdFastfood,
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Mart',
    icon: HiShoppingCart,
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Transport',
    hrefRoute: PAGE_ROUTES.TRANSPORT,
    icon: RiTaxiFill,
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Shopping',
    icon: RiShoppingBag2Fill,
  },
];
export default function Selections() {
  const router = useRouter();
  const navigateToRoute = (path?: string) => path && router.push(`/${path}`);

  return (
    <div className='flex flex-col justify-between flex-auto h-full gap-2 p-2'>
      <div className='flex items-center justify-between gap-1 p-2 border'>
        {AvailableSelections.map((selection) => {
          const Icon = selection.icon;
          return (
            <div
              className='flex flex-col items-center justify-between'
              onClick={() => navigateToRoute(selection.hrefRoute)}
              key={selection.title}>
              {Icon !== undefined ? (
                <Icon className='w-8 h-8 text-[#31BF6D] rounded-full shadow-sm' />
              ) : (
                <img
                  className='w-16 h-16 border border-gray-100 rounded-full shadow-sm'
                  src={selection.imageLoc}
                  alt={selection.title}
                />
              )}
              <h2 className='font-popins'>{selection.title}</h2>
            </div>
          );
        })}
      </div>
      <div className='w-24 h-2 mx-auto border border-gray-200 rounded-md'>
        <div className={'w-1/3 h-full rounded-md bg-green-600'}></div>
        <div className={'w-1/3 h-full rounded-md'}></div>
        <div className={'w-1/3 h-full rounded-md'}></div>
      </div>
      <img
        src={'/images/dummy-screen.jpg'}
        className='flex-auto w-full h-auto mt-8'
      />
    </div>
  );
}
