'use client';

import * as React from 'react';
import '@/lib/env';

import CTA from '@/components/homepage/cta';
import Hero from '@/components/homepage/hero';
import Projects from '@/components/homepage/projects';
import Summary from '@/components/homepage/summary';
import Navbar from '@/components/Navbar';

// import ArrowLink from '@/components/links/ArrowLink';
// import ButtonLink from '@/components/links/ButtonLink';
// import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Summary />
      <Projects />
      <CTA />
    </main>
  );
}
