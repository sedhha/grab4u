import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineScan } from 'react-icons/ai';
export default function TopLabel() {
  return (
    <React.Fragment>
      <div className='relative px-2 pt-2 bg-blue-400'>
        <div className='flex flex-row items-center justify-around w-full'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-semibold font-popins'>
              Recieve Welcome Bundle
            </h2>
            <h2 className='font-semibold font-popins'>Worth Up to SGD 1,200</h2>
            <h4 className='font-popins'>Sign Up With Just Drive</h4>
          </div>
          <img src='/images/tiger-image.png' height={160} width={120} />
        </div>
      </div>
      <div className='bg-white flex w-11/12 border mx-auto mt-2 p-1.5 rounded-sm gap-1  items-center'>
        <BsSearch />
        <input
          className='w-full p-1.5 rounded-sm border-none outline-none border-r-2  border-gray-300'
          type='text'
          placeholder='Search'
        />
        <AiOutlineScan />
      </div>
    </React.Fragment>
  );
}
