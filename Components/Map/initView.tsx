import React from 'react';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { BsBookmarkCheck, BsPencilSquare } from 'react-icons/bs';

type Props = {
  setBookView: () => void;
};
const InitView = ({ setBookView }: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <img src='/images/map-view.jpg' className='w-full h-auto' />
      <div
        aria-label='Selection-Box'
        className='absolute bottom-0 flex flex-col w-full gap-2 px-4 py-2 bg-white translate-y-2/4'>
        <div
          aria-label='Selected-Address'
          className='flex items-center justify-between bg-[#F2F2F2] p-2 gap-2'>
          <IoMdRadioButtonOn className='text-2xl bg-[#08A0D3] text-white rounded-full' />
          <div className='flex flex-col gap-1'>
            <h4 className='font-semibold text-md font-popins'>
              Cotswold Villas
            </h4>
            <h5 className='text-sm font-medium font-popins'>
              35 Cotswold Cl, Singapore 359626
            </h5>
          </div>
          <BsBookmarkCheck className='text-xl text-gray-400' />
        </div>
        <div
          aria-label='Pickup-Notes'
          className='flex items-center justify-between gap-2 p-2'>
          <BsPencilSquare className='text-2xl text-[#05ADE2]' />
          <h4 className='font-semibold text-sm font-popins text-[#05ADE2] flex-auto ml-2'>
            Add pick-up notes for driver
          </h4>
        </div>
        <div
          aria-label='Green-Button'
          onClick={setBookView}
          className='py-3 rounded-md bg-[#00B14F] w-full flex justify-center cursor-pointer'>
          <label className='font-semibold text-white font-popins text-md'>
            Confirm Pickup
          </label>
        </div>
      </div>
    </div>
  );
};

export default InitView;
