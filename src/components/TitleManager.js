import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = ({ defaultTitle }) => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    if (pathname === '/') {
      document.title = 'Home - Shopping Application';
    } else if (pathname === '/cart') {
      document.title = 'Cart - Shopping Application';
    } else if (pathname === '/Payment') {
      document.title = 'Payment - Shopping Application';
    } else if (pathname.startsWith('/product')) {
      document.title = 'Product - Shopping Application';
    } else  {
      document.title = defaultTitle;
    }
  }, [location, defaultTitle]);

  return null;
};

export default TitleManager;