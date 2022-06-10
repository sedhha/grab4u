import React from 'react';
import LeftBody from './LeftBody';
import RideCards from './RideCards';
import SelectRidePopup from './SelectRidePopup';
import TopLabel from './TopLabel';

export default function Transport() {
  const [showScheduler, setShowScheduler] = React.useState(false);
  return (
    <div className='w-full border-l-2'>
      <TopLabel updateScheduler={(value) => setShowScheduler(value)} />
      <RideCards />
      <LeftBody />
      {showScheduler && (
        <SelectRidePopup updateScheduler={() => setShowScheduler(false)} />
      )}
    </div>
  );
}
