import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PAGE_ROUTES } from '../constants/config';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <img
        src='/images/g4u-icon.png'
        alt='Icon Missing'
        className='w-full h-auto'
      />
      <h1 className='my-2 space-x-4 text-[#1A206A] font-medium text-center font-popins text-7xl'>
        JustDrive
      </h1>
      <div
        aria-label='Green-Button'
        onClick={() => router.push(PAGE_ROUTES.HOME)}
        className='py-3 w-11/12 rounded-md bg-[#00B14F] flex justify-center cursor-pointer'>
        <label className='font-semibold text-white font-popins text-md'>
          Login
        </label>
      </div>
    </div>
  );
};

export default Home;
