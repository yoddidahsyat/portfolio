'use client';

import { useEffect } from 'react';

const ScrollbarWidthVar = () => {
  useEffect(() => {
    const setVar = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        '--scrollbar-w',
        `${scrollbarWidth}px`
      );
    };
    setVar();
    window.addEventListener('resize', setVar);
    return () => window.removeEventListener('resize', setVar);
  }, []);

  return null;
};

export default ScrollbarWidthVar;
