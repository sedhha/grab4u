import React from 'react';
import ViewHistory from './ViewHistory';
import Booking from './Booking';
import BookingConfirmation from './CabBooked';
import Feedback from './Feedback';
import FrequentBooks from './FrequentBooks';
import Nearby from './NearbyFriend';

export const BOOKVIEW_OPTIONS = {
  BOOKING_CONFIRMATION: 'BOOKING_CONFIRMATION',
  FEEDBACK_FORM: 'FEEDBACK_FORM',
  ADDITIONAL_HELP_WINDOW: 'ADDITIONAL_HELP_WINDOW',
  BOOKING_VIEWS: 'BOOKING_VIEWS',
} as const;

export type BookingOptions = keyof typeof BOOKVIEW_OPTIONS;

const BookView = () => {
  const [viewHistory, setViewHistory] = React.useState(false);
  const [showModal, setShowModal] = React.useState<BookingOptions>(
    BOOKVIEW_OPTIONS.BOOKING_VIEWS
  );
  const [nearByFriend, setNearByFriend] = React.useState(false);
  const updateBookedSettings = (value: BookingOptions) => {
    setShowModal(value);
    setNearByFriend(false);
  };
  const numberOfBooks = localStorage.getItem('number-of-times-booked');
  const numberOfBooksInt = parseInt(numberOfBooks ?? '0');
  let RenderComponent = viewHistory ? (
    <ViewHistory
      hideShowHistory={() => setViewHistory(false)}
      setBooked={updateBookedSettings}
      showNearbyFriend={() => setNearByFriend(true)}
    />
  ) : (
    <Booking
      setBooked={updateBookedSettings}
      showViewHistory={() => setViewHistory(true)}
      showNearbyFriend={() => setNearByFriend(true)}
    />
  );
  switch (showModal) {
    case BOOKVIEW_OPTIONS.BOOKING_CONFIRMATION: {
      RenderComponent = (
        <BookingConfirmation
          updateScheduler={() => {
            updateBookedSettings(BOOKVIEW_OPTIONS.FEEDBACK_FORM);
          }}
        />
      );
      break;
    }
    case BOOKVIEW_OPTIONS.FEEDBACK_FORM: {
      RenderComponent = (
        <Feedback
          updateScheduler={() =>
            numberOfBooksInt > 5
              ? updateBookedSettings(BOOKVIEW_OPTIONS.ADDITIONAL_HELP_WINDOW)
              : updateBookedSettings(BOOKVIEW_OPTIONS.BOOKING_VIEWS)
          }
        />
      );
      break;
    }
    case BOOKVIEW_OPTIONS.ADDITIONAL_HELP_WINDOW: {
      RenderComponent = (
        <FrequentBooks
          updateScheduler={() =>
            updateBookedSettings(BOOKVIEW_OPTIONS.BOOKING_VIEWS)
          }
        />
      );
      break;
    }
    default: {
    }
  }
  return (
    <div className='relative flex flex-col w-full'>
      {RenderComponent}
      {nearByFriend && (
        <Nearby
          updateScheduler={() =>
            updateBookedSettings(BOOKVIEW_OPTIONS.BOOKING_CONFIRMATION)
          }
          closePopup={() => setNearByFriend(false)}
        />
      )}
    </div>
  );
};

export default BookView;
