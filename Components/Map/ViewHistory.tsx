import React from 'react';
import { AiFillCar, AiOutlineCaretDown } from 'react-icons/ai';
import { FaCcVisa } from 'react-icons/fa';
import { BookingOptions, BOOKVIEW_OPTIONS } from './book';
const rideTypes = [
  {
    icon: AiFillCar,
    rideName: 'GrabAssist',
    dropOffString: '12:01 - 12:13 drop off',
    specificDescription: '1 foldable mobility device + 3s...',
    cost: '25.90',
  },
  {
    icon: AiFillCar,
    rideName: 'GrabAssist Plus (From Hospital)',
    dropOffString: '12:41 - 12:52 drop off',
    disabled: true,
  },
  {
    icon: AiFillCar,
    rideName: 'GrabAssist Plus',
    dropOffString: '12:41 - 12:52 drop off',
    specificDescription: '1 Wheelchair + 1 seat',
    cost: '106.00',
  },
  {
    icon: AiFillCar,
    rideName: 'GrabPet',
    dropOffString: '12:01 - 12:13 drop off',
    specificDescription: '1 Pet Seat Cover + 3 Seats',
    cost: '37.90',
  },
  {
    icon: AiFillCar,
    rideName: 'GrabPet XL',
    dropOffString: '12:01 - 12:13 drop off',
    specificDescription: '2 Pet Seat Cover + 3 Seats',
    cost: '61.90',
  },
  {
    icon: AiFillCar,
    rideName: 'Grab Talk2Me',
    dropOffString: '12:01 - 12:13 drop off',
    specificDescription: 'First Responder certified Driver',
    cost: '28.80',
  },
];
type Props = {
  hideShowHistory: () => void;
  setBooked: (value: BookingOptions) => void;
};

const BookView = ({ hideShowHistory, setBooked }: Props) => {
  return (
    <div className='relative flex flex-col w-full'>
      <img src='/images/map-view-02.jpg' className='w-full h-auto' />
      <div
        aria-label='Selection-Box'
        className='absolute bottom-0 flex flex-col w-full gap-2 px-4 py-2 translate-y-32 bg-white'>
        <AiOutlineCaretDown
          className='mx-auto font-semibold text-center text-gray-400 font-xl'
          size={'1.5rem'}
          onClick={hideShowHistory}></AiOutlineCaretDown>
        <div
          aria-label='Show-Top-Headers'
          className='flex flex-row items-center justify-between gap-1 p-2'>
          <label className='font-popins text-[#A0A0A0] font-semibold text-sm'>
            Everyday
          </label>
          <label className='font-popins text-[#A0A0A0] font-semibold text-sm'>
            Premium
          </label>
          <label className='font-popins text-[#A0A0A0] font-semibold text-sm'>
            Kid Friendly
          </label>
          <label className='font-popins text-[#00B14F] font-semibold text-sm'>
            Value Added
          </label>
        </div>
        <div
          aria-label='Top-Header-Label'
          className='flex items-center justify-between w-full'>
          <label className='font-semibold text-md font-popins'>
            Value Added
          </label>
        </div>
        <div
          aria-label='Available-Rides'
          className='flex flex-col gap-1 overflow-auto max-h-64'>
          {rideTypes.map((rideType) => {
            const Icon = rideType.icon;
            return (
              <div
                key={rideType.rideName}
                aria-label='Ride-Type-Card'
                className='relative flex items-center justify-between w-full gap-2'>
                {rideType.disabled && (
                  <div className='absolute top-0 left-0 w-full h-full bg-gray-300 opacity-50 cursor-not-allowed' />
                )}
                {!rideType.disabled ? (
                  <Icon className='text-[#31BF6D] text-2xl' />
                ) : (
                  <Icon className='text-2xl text-gray-300' />
                )}
                <div
                  aria-label='Ride-Details-Card'
                  className='flex flex-col flex-auto gap-1'>
                  <h4 className='font-semibold text-md font-popins'>
                    {rideType.rideName}
                  </h4>
                  <h5 className='text-sm font-medium font-popins'>
                    {rideType.dropOffString}
                  </h5>

                  {rideType.specificDescription !== undefined && (
                    <h6 className='text-xs font-medium text-gray-400 font-popins'>
                      {rideType.specificDescription}
                    </h6>
                  )}
                </div>
                {!rideType.disabled && (
                  <h3 className='text-sm font-semibold font-popins'>
                    S$ {rideType.cost}
                  </h3>
                )}
              </div>
            );
          })}
        </div>
        <div className='border-t-2 border-gray-200 shadow-sm shadow-gray-100 h-0.5 w-full' />
        <div className='flex items-center justify-between w-full p-2 mt-1'>
          <div className='flex items-center flex-1 border-gray-200 border-r-1'>
            <FaCcVisa className='bg-[#1A206A] text-white text-md mr-2' />
            <label className='font-semibold font-popins text-md'>1234</label>
          </div>
          <div className='flex items-center flex-1 border-gray-200 border-r-1'>
            <label className='w-full font-semibold text-right font-popins text-md'>
              Offer
            </label>
          </div>
        </div>
        <div
          aria-label='Green-Button'
          className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
          <label
            className='font-semibold text-white font-popins text-md'
            onClick={() => setBooked(BOOKVIEW_OPTIONS.BOOKING_CONFIRMATION)}>
            Book JustGrab
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookView;
