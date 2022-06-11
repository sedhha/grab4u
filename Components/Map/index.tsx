import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import BookView from './book';
import InitView from './initView';
const MapView = () => {
  const router = useRouter();
  const [showBookView, setShowBookView] = React.useState(false);
  const navigateBack = () =>
    showBookView ? setShowBookView(false) : router.back();
  return (
    <div className='relative flex flex-col w-full'>
      {showBookView ? (
        <BookView />
      ) : (
        <InitView setBookView={() => setShowBookView(true)} />
      )}
      <div className='absolute top-4 left-4 h-[3rem] w-[3rem] rounded-full bg-white flex justify-center items-center'>
        <IoIosArrowBack
          className='text-3xl font-semibold text-gray-600'
          onClick={navigateBack}
        />
      </div>
    </div>
  );
};

export default MapView;
