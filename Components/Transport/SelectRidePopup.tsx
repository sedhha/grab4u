import React from 'react';
import { ImCross } from 'react-icons/im';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

type Props = {
  updateScheduler: () => void;
};
export default function SelectRidePopup({ updateScheduler }: Props) {
  return (
    <React.Fragment>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20' />
      <div
        aria-label='popup-window'
        className='absolute left-0 flex flex-col w-full p-2 bg-white rounded-md top-2/4'>
        <div className='flex flex-row items-center gap-4 p-2'>
          <ImCross
            className='text-2xl text-gray-300'
            strokeWidth={0.5}
            onClick={updateScheduler}
          />
          <label className='text-xl'>Schedule a ride</label>
        </div>
        <div className='my-2 w-full h-0.5 bg-gray-200' />
        <div className='flex flex-row items-center gap-4 p-2'>
          <BsCalendarWeek
            className='text-2xl text-gray-300'
            strokeWidth={0.5}
          />
          <label className='text-xl'>Select a Date</label>
        </div>
        <div className='my-2 w-full h-0.5 bg-gray-200' />
        <div className='flex flex-row items-center gap-4 p-2'>
          <AiOutlineClockCircle
            className='text-2xl text-gray-300'
            strokeWidth={0.5}
          />
          <label className='text-xl'>Select a time</label>
        </div>
        <div className='my-2 w-full h-0.5 bg-gray-200' />
        <label className='my-2 text-sm text-gray-400'>
          Date and time follow time zone of your pickup point
        </label>
        <div className='bg-[#C5C5C5] p-2 flex justify-center items-center rounded-md mx-2 cursor-not-allowed'>
          <label className='text-xl font-bold font-popins text-[#9B9B9B]'>
            Schedule
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
