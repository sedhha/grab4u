import React from 'react';
import TopLabel from './TopLabel';
import Selections from './Selections';

export default function Home() {
  return (
    <div className='w-full border-l-2'>
      <TopLabel />
      <Selections />
    </div>
  );
}
