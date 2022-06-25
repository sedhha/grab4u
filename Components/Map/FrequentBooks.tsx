import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaThumbsUp } from 'react-icons/fa';
type Props = {
  updateScheduler: () => void;
};
export default function SelectRidePopup({ updateScheduler }: Props) {
  const [stars, setStars] = React.useState(0);
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
        <FaThumbsUp className='mx-auto text-xl text-green-400' size={48} />
        <h1 className='mx-auto text-xl font-bold font-popins spacing-2'>
          We&apos;re here for you
        </h1>
        <h3 className='mx-auto text-xl'>
          We have noticed that you have booked more than 5 Talk2Me sessions this
          week. Let us know if you need additional help.
        </h3>

        <div className='my-2 w-full h-0.5 bg-gray-200' />

        <div className='flex items-center justify-around gap-2'>
          <div
            aria-label='Green-Button'
            className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
            <label className='font-semibold text-white font-popins text-md'>
              Yes Please
            </label>
          </div>
          <div
            aria-label='Gray-Button'
            onClick={updateScheduler}
            className='flex justify-center w-full py-3 bg-gray-300 rounded-md cursor-pointer'>
            <label className='font-semibold font-popins text-md'>
              I&apos;m fine, thanks!
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
