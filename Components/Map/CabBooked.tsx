import React from 'react';
import { ImCross } from 'react-icons/im';

type Props = {
  updateScheduler: () => void;
};
export default function SelectRidePopup({ updateScheduler }: Props) {
  return (
    <React.Fragment>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20' />
      <img
        src='/images/map-view-02.jpg'
        className='absolute left-0 w-auto h-screen -z-10'
      />
      <div
        aria-label='popup-window'
        className='absolute left-0 flex flex-col w-full p-2 bg-white rounded-md translate-y-3/4'>
        <div className='flex flex-row items-center gap-4 p-2'>
          <ImCross
            className='text-2xl text-gray-300'
            strokeWidth={0.5}
            onClick={updateScheduler}
          />
          <label className='text-xl'>Your Ride Has Been Booked!</label>
        </div>
        <label className='font-md color-[#05ADE2]'>
          We hope you&apos;re going to have an amazing Ride with your Buddy
          XXXXXX.
        </label>
        <div className='my-2 w-full h-0.5 bg-gray-200' />

        <label className='my-2 text-sm text-gray-400'>
          Date and time follow time zone of your pickup point
        </label>
        <div
          aria-label='Green-Button'
          onClick={updateScheduler}
          className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
          <label className='font-semibold text-white font-popins text-md'>
            Okay
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
