import * as React from 'react';
import '@/lib/env';

import CTA from '@/components/homepage/cta';
import Hero from '@/components/homepage/hero';
import Projects from '@/components/homepage/projects';
import Summary from '@/components/homepage/summary';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portfolio of Yoddi Dahsyat',
  description: 'Full Stack Developer',
};

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main className='px-2 sm:px-0'>
      <Navbar />
      <Hero />
      <Summary />
      <Projects />
      <CTA />
    </main>
  );
}
