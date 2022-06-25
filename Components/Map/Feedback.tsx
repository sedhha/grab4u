import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
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
        <div className='flex flex-row items-center justify-center gap-4 p-2'>
          <div className='flex items-center gap-2'>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiOutlineStar
                  onClick={() => {
                    setStars(i + 1);
                  }}
                  key={i}
                  className={`${
                    stars > i ? 'text-yellow-500' : 'text-gray-300'
                  } text-4xl`}
                />
              ))}
          </div>
        </div>
        <h1 className='mx-auto text-xl font-bold font-popins spacing-2'>
          Your feedback is useful to us.
        </h1>
        <h3 className='mx-auto text-xl'>How was your talk2me session?</h3>

        <div className='my-2 w-full h-0.5 bg-gray-200' />

        <textarea rows={3} className='p-2 my-2 border-4' />
        <div className='flex items-center justify-around gap-2'>
          <div
            aria-label='Green-Button'
            onClick={updateScheduler}
            className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
            <label className='font-semibold text-white font-popins text-md'>
              Submit
            </label>
          </div>
          <div
            aria-label='Gray-Button'
            onClick={updateScheduler}
            className='flex justify-center w-full py-3 bg-gray-300 rounded-md cursor-pointer'>
            <label className='font-semibold font-popins text-md'>Cancel</label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
