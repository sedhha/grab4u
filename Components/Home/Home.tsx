import React from 'react';
import TopLabel from './TopLabel';
type Props = {};

export default function Home({}: Props) {
  return (
    <div className='w-full border-l-2 border-r-2 border-blue-600'>
      <TopLabel />
    </div>
  );
}
