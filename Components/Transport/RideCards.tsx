import React from 'react';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
const RIDES = [
  {
    title: 'Temasek Hall',
    description: 'Temasek Hall - National University of Singapore',
    logo: 'bookmark',
    amount: 24.9,
  },
  {
    title: 'Hougang Mall',
    description: '90 Hougang Ave 10, Singapore, 538766',
    logo: 'location',
    amount: 10.9,
  },
  {
    title: 'Aztech Building',
    description: '31 Ubi Rd 1,Singapore, 408694',
    logo: 'location',
    amount: 12.9,
  },
];
export default function RideCards() {
  return (
    <div className='flex flex-col w-full p-2'>
      {RIDES.map((ride, index) => {
        return (
          <div key={index} className='px-2 py-3 border-b-2 border-b-gray-200'>
            <div className='flex flex-row items-center justify-between gap-1'>
              <div className='bg-[#00B050] p-1 rounded-full'>
                {ride.logo === 'bookmark' ? (
                  <BsFillBookmarkDashFill className='bg-[#00B050] text-white' />
                ) : (
                  <BiMap className='bg-[#00B050] text-white' />
                )}
              </div>
              <div className='flex flex-col'>
                <h2 className='font-semibold font-popins'>{ride.title}</h2>
                <h4 className='font-popins'>{ride.description.slice(0, 30)}</h4>
              </div>
              <h3 className='font-popins'>S$ {ride.amount}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
