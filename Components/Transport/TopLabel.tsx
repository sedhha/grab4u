import React from 'react';
import { BiArrowBack, BiMap } from 'react-icons/bi';
import { BsMap } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { PAGE_ROUTES } from '../../constants/config';

type Props = {
  updateScheduler: (show: boolean) => void;
};
export default function TopLabel({ updateScheduler }: Props) {
  const router = useRouter();
  const navigateToMapView = () => router.push(PAGE_ROUTES.MAP);
  const goBack = () => router.back();
  return (
    <React.Fragment>
      <div className='px-2 py-2 bg-[#F8AB05] flex flex-col'>
        <div
          aria-label='Top Navigation Section'
          className='flex flex-row justify-between w-full px-1 py-2'>
          <BiArrowBack
            className='mt-2 text-2xl text-white text-bold'
            onClick={goBack}
          />
          <div className='flex items-center p-2 px-4 bg-white rounded-[2rem]'>
            <BsMap className='text-2xl text-[#0C4D3C] text-bold' />
            <label className='text-[#0C4D3C]' onClick={navigateToMapView}>
              Map
            </label>
          </div>
        </div>
        <div className='flex flex-row items-center justify-around w-full'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-semibold font-popins'>The Roads are Busy</h2>
            <h2 className='font-medium font-popins'>
              Drivers may take longer to get to you
            </h2>
          </div>
          <img src='/images/move-logo.png' className='h-[4rem]' />
        </div>
      </div>
      <div className='bg-white flex w-11/12 border mx-auto mt-2 p-1.5 rounded-lg gap-1  items-center'>
        <BiMap className='text-[#D85A49]' />
        <input
          className='w-full p-1.5 rounded-sm border-none outline-none border-r-2  border-gray-300 font-popins text-semibold'
          type='text'
          placeholder='Where to?'
        />
        <div className='w-0.5 bg-gray-200 h-[2.5rem] mx-2' />
        <div
          className='flex flex-row items-center gap-1 space-between'
          onClick={() => updateScheduler(true)}>
          <label className='text-lg'>Now</label>
          <AiOutlineDown className='mt-1 text-lg' />
        </div>
      </div>
    </React.Fragment>
  );
}
