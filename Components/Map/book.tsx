import React from 'react';
import ViewHistory from './ViewHistory';
import Booking from './Booking';
import BookingConfirmation from './CabBooked';

const BookView = () => {
  const [booked, setBooked] = React.useState(false);
  const [viewHistory, setViewHistory] = React.useState(false);
  const [showModal, setShowModal] = React.useState(true);
  const updateBookedSettings = (value: boolean) => {
    setBooked(value);
    setShowModal(!value);
  };
  return (
    <div className='relative flex flex-col w-full'>
      {showModal ? (
        viewHistory ? (
          <ViewHistory
            hideShowHistory={() => setViewHistory(false)}
            setBooked={updateBookedSettings}
          />
        ) : (
          <Booking
            setBooked={updateBookedSettings}
            showViewHistory={() => setViewHistory(true)}
          />
        )
      ) : (
        <BookingConfirmation
          updateScheduler={() => updateBookedSettings(false)}
        />
      )}
    </div>
  );
};

export default BookView;
