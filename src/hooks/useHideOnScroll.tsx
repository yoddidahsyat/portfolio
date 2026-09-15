'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns false while the page is being scrolled down (past `threshold` px
 * of movement), true while scrolling up or near the top of the page.
 */
const useHideOnScroll = (threshold = 10) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 0) {
        setVisible(true);
      } else if (Math.abs(diff) >= threshold) {
        setVisible(diff < 0);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return visible;
};

export default useHideOnScroll;
