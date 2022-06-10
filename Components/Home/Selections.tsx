import { useRouter } from 'next/router';
import React from 'react';
import { PAGE_ROUTES } from '../../constants/config';

const AvailableSelections = [
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Food',
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Mart',
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Transport',
    hrefRoute: PAGE_ROUTES.TRANSPORT,
  },
  {
    imageLoc: '/images/selections/food.jpg',
    title: 'Shopping',
  },
];
export default function Selections() {
  const totalNavItems = AvailableSelections.length;
  const [selected, setSelected] = React.useState(0);
  const router = useRouter();
  const firstDivider = Math.floor(totalNavItems / 3);
  const secondDivider = Math.floor((2 * totalNavItems) / 3);
  const greenBG = 'bg-green-600';
  const transparentBG = 'bg-transparent';

  const firstSectionColor = selected <= firstDivider ? greenBG : transparentBG;
  const secondSectionColor =
    selected > firstDivider && selected <= secondDivider
      ? greenBG
      : transparentBG;
  const thirdSectionColor = selected > secondDivider ? greenBG : transparentBG;

  const navigateToRoute = (path?: string) => path && router.push(`/${path}`);

  return (
    <div className='flex flex-col gap-2 p-2'>
      <div className='flex items-center justify-between gap-1 p-2 border'>
        {AvailableSelections.map((selection) => {
          return (
            <div
              className='flex flex-col items-center justify-between'
              onClick={() => navigateToRoute(selection.hrefRoute)}
              key={selection.title}>
              <img
                className='w-16 h-16 border border-gray-100 rounded-full shadow-sm'
                src={selection.imageLoc}
                alt={selection.title}
              />
              <h2 className='font-popins'>{selection.title}</h2>
            </div>
          );
        })}
      </div>
      <div className='w-24 h-2 mx-auto border border-gray-200 rounded-md'>
        <div className={'w-1/3 h-full rounded-md ' + firstSectionColor}></div>
        <div className={'w-1/3 h-full rounded-md ' + secondSectionColor}></div>
        <div className={'w-1/3 h-full rounded-md ' + thirdSectionColor}></div>
      </div>
    </div>
  );
}
