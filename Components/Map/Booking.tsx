import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { FaCar, FaCcVisa } from 'react-icons/fa';
import { BookingOptions, BOOKVIEW_OPTIONS } from './book';

type Props = {
  setBooked: (show: BookingOptions) => void;
  showViewHistory: () => void;
  showNearbyFriend: () => void;
};

const rideTypes = [
  {
    icon: AiFillCar,
    rideName: 'JustGrab',
    dropOffString: '12:39 - 12:48 drop off',
    specificDescription: 'Many riders like you, but drivers are few',
    cost: '25.9',
  },
  {
    icon: FaCar,
    rideName: 'Standard Taxi',
    dropOffString: '12:41 - 12:52 drop off',
    cost: '22.4-32.4',
  },
];

export default function ({
  setBooked,
  showViewHistory,
  showNearbyFriend,
}: Props) {
  const updateTimesCabBooked = () => {
    const currentValue = localStorage.getItem('number-of-times-booked');
    if (!currentValue) localStorage.setItem('number-of-times-booked', '1');
    else {
      const newValue = parseInt(currentValue) + 1;
      localStorage.setItem('number-of-times-booked', newValue.toString());
    }
  };
  return (
    <React.Fragment>
      <img src='/images/map-view-02.jpg' className='w-full h-auto' />
      <div
        aria-label='Selection-Box'
        className='absolute bottom-0 flex flex-col w-full gap-2 px-4 py-2 bg-white translate-y-2/4'>
        <div
          aria-label='Top-Header-Label'
          className='flex items-center justify-between w-full'>
          <label className='font-semibold text-md font-popins'>
            Suggested Rides
          </label>
          <label
            className='font-semibold text-md font-popins text-[#08A0D3]'
            onClick={showViewHistory}>
            View All
          </label>
        </div>
        <div aria-label='Available-Rides' className='flex flex-col gap-1'>
          {rideTypes.map((rideType) => {
            const Icon = rideType.icon;
            return (
              <div
                key={rideType.rideName}
                aria-label='Ride-Type-Card'
                onClick={showNearbyFriend}
                className='flex items-center justify-between w-full gap-2'>
                <Icon className='text-[#31BF6D] text-2xl' />
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
                <h3 className='text-sm font-semibold font-popins'>
                  S$ {rideType.cost}
                </h3>
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
          onClick={() => {
            updateTimesCabBooked();
            setBooked(BOOKVIEW_OPTIONS.BOOKING_CONFIRMATION);
          }}
          className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
          <label className='font-semibold text-white font-popins text-md'>
            Book JustGrab
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
