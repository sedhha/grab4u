import { useRouter } from 'next/router';
import React from 'react';
import { PAGE_ROUTES } from '../constants/config';
import Home from './Home/Home';
import Transport from './Transport';
import Map from './Map';

export default function Base() {
  const router = useRouter();
  const route = router.query.pageRoute as string;
  let RenderComponent = <div>404: Page Not Found</div>;
  switch (route) {
    case PAGE_ROUTES.HOME: {
      RenderComponent = <Home />;
      break;
    }

    case PAGE_ROUTES.TRANSPORT: {
      RenderComponent = <Transport />;
      break;
    }
    case PAGE_ROUTES.MAP: {
      RenderComponent = <Map />;
      break;
    }

    default: {
    }
  }
  return (
    <div className='flex flex-col items-center max-w-sm mx-auto'>
      {RenderComponent}
    </div>
  );
}
