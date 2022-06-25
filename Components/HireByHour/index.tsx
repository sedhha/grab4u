import { useRouter } from 'next/router';
import React from 'react';
import { IoIosArrowBack, IoMdRadioButtonOn } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
type Props = {};

export default function HireByHour({}: Props) {
  const router = useRouter();
  const navigateBack = () => router.back();
  return (
    <div className='relative flex flex-col justify-center h-screen bg-[#F7F7F7]'>
      <div className='absolute top-4 left-4 h-[3rem] w-[3rem] rounded-full bg-white border flex justify-center items-center'>
        <IoIosArrowBack
          className='text-3xl font-semibold text-gray-600'
          onClick={navigateBack}
        />
      </div>
      <img src='/images/hire-by-hour.jpg' className='w-full h-auto' />
      <h1 className='mx-4 text-2xl font-semibold font-popins spacing-2'>
        Talk to a driver, at your pace
      </h1>
      <h4 className='mx-4 text-gray-500 font-popins'>
        Need a listening ear? We've got you covered. Talk about anything. scenic
        view included.
      </h4>
      <h4 className='font-semibold text-sm font-popins text-[#05ADE2] mx-4 mt-2'>
        Find Out More
      </h4>
      <div className='absolute bottom-0 left-0 flex flex-col items-center justify-center w-full bg-white'>
        <div className='flex w-full gap-2 px-2 py-3 mx-2'>
          <IoMdRadioButtonOn className='text-2xl bg-[#08A0D3] text-white rounded-full' />
          <p className='font-popins'>Current Location</p>
        </div>
        <div className='w-full flex px-2 py-4 bg-gray-200 cursor-not-allowed gap-4 text-[#6F6F6F] items-center'>
          <FiClock className='text-2xl' />
          <h4 className='text-xl'>How long?</h4>
        </div>
      </div>
    </div>
  );
}
