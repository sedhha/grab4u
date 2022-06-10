import React from 'react';
import { FcManager, FcCollaboration } from 'react-icons/fc';
export default function LeftBody() {
  return (
    <React.Fragment>
      <div className='px-2'>
        <h1 className='text-lg font-semibold font-popins spacing-2 text-[#444444]'>
          Get a dedicated driver
        </h1>
        <div
          aria-label='Green-Card'
          className='bg-[#E9FCCF] p-4 rounded-lg mx-1 flex items-center gap-2'>
          <FcManager className='text-4xl' />
          <label className='text-lg text-poppins'>Hire a driver by hour</label>
        </div>
        <h1 className='text-lg font-semibold font-popins spacing-2 text-[#444444]'>
          JustDrive
        </h1>
        <div
          aria-label='Green-Card'
          className='bg-[#E9FCCF] p-4 rounded-lg mx-1 flex items-center gap-2'>
          <FcCollaboration className='text-4xl' />
          <label className='text-lg text-poppins'>Hire a driver by hour</label>
        </div>
      </div>
    </React.Fragment>
  );
}
