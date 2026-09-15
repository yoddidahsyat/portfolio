'use client';

import { RefObject, useEffect, useState } from 'react';

/**
 * Tracks whether the element measured via measureRef (the actual text row,
 * not the padded nav box) is currently overlapping the section with the
 * given id.
 */
const useDarkSectionOverlap = (
  sectionId: string,
  measureRef: RefObject<HTMLElement>
) => {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let observer: IntersectionObserver;

    const setup = () => {
      observer?.disconnect();
      const rect = measureRef.current?.getBoundingClientRect();
      if (!rect) return;

      const topMargin = -Math.round(rect.top);
      const bottomMargin = -Math.round(window.innerHeight - rect.bottom);
      observer = new IntersectionObserver(
        ([entry]) => setIsOverDark(entry.isIntersecting),
        { rootMargin: `${topMargin}px 0px ${bottomMargin}px 0px`, threshold: 0 }
      );
      observer.observe(section);
    };

    setup();
    window.addEventListener('resize', setup);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', setup);
    };
  }, [sectionId, measureRef]);

  return isOverDark;
};

export default useDarkSectionOverlap;
