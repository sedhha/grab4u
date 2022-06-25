import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
type Props = {
  updateScheduler: () => void;
  closePopup: () => void;
};
export default function SelectRidePopup({
  updateScheduler,
  closePopup,
}: Props) {
  return (
    <React.Fragment>
      <div className='absolute top-0 left-0 w-full h-screen bg-black opacity-20' />
      <img
        src='/images/map-view-02.jpg'
        className='absolute left-0 w-auto h-screen -z-10'
      />
      <div
        aria-label='popup-window'
        className='absolute left-0 flex flex-col w-full p-2 bg-white rounded-md translate-y-3/4'>
        <AiFillCheckCircle
          className='mx-auto text-xl text-green-400'
          size={48}
        />
        <h1 className='mx-auto text-xl font-bold font-popins spacing-2'>
          An old friend is nearby
        </h1>
        <div className='flex items-center w-full gap-2'>
          <img
            src='/images/man.jpg'
            className='h-[2rem] w-[2rem] rounded-full'
            alt='user-avatar'
          />
          <h4 className='font-popins text-medium'>John Doe</h4>
        </div>
        <h3 className='mx-auto mt-2 text-xs'>
          A Driver you have talked in one of the previous sessions is nearby and
          available. Would you want them to be allocated for this session too?
        </h3>

        <div className='my-2 w-full h-0.5 bg-gray-200' />

        <div className='flex items-center justify-around gap-2'>
          <div
            aria-label='Green-Button'
            onClick={updateScheduler}
            className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
            <label className='font-semibold text-white font-popins text-md'>
              Sure
            </label>
          </div>
          <div
            aria-label='Gray-Button'
            className='flex justify-center w-full py-3 bg-gray-300 rounded-md cursor-pointer'>
            <label
              className='font-semibold font-popins text-md'
              onClick={closePopup}>
              No Thanks
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
