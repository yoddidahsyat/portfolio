'use client';

import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

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
    <main className='bg-primary-50'>
      <Navbar />
      <section className='h-screen'>
        <div className='container mx-auto flex h-full items-end py-16'>
          <div>
            <h1 className='text-5xl font-light'>
              Hi, I'm Yoddi &mdash; a{' '}
              <span className='font-semibold'>Full Stack Developer</span>
            </h1>
          </div>
        </div>
      </section>
      <section className='h-screen'>
        <div className='container h-full mx-auto py-16 grid grid-cols-3'>
          <div className='grid grid-rows-6'>
            <h2 className='row-span-4 text-4xl font-light leading-normal'>
              learn, code, and bring impact to the world.
            </h2>
            <p>
              I am a Full-Stack Developer based in Indonesia. My main stacks are
              NextJs for the frontend and NodeJs for the backend. I am confident
              with Typescript and PHP.
            </p>
            <p>
              Currently working at{' '}
              <Link
                href='https://vaforeveryone.com.au'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary-600 hover:underline'
              >
                VA For Everyone
              </Link>
              , a Virtual Assistant agency based in Australia. I usually handle
              both frontend and backend of client's web application, with
              various stacks and architecture.
            </p>
          </div>
        </div>
      </section>
      <section className='min-h-screen'>
        <div className='container mx-auto py-16 grid grid-cols-3'>
          <div className='col-start-2'>
            <h1 className='font-light sticky top-1/3'>Works</h1>
          </div>
          <div className='col'>
            <div className='h-screen'>
              <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
                <h1 className='font-medium'>Works A</h1>
              </div>
            </div>
            <div className='h-screen'>
              <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
                <h1 className='font-medium'>Works B</h1>
              </div>
            </div>
            <div className='h-screen'>
              <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
                <h1 className='font-medium'>Works C</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen'>
        <div className='container mx-auto flex h-full items-center justify-end'>
          <div className='grid grid-cols-3'>
            <h1 className='col-start-3 font-light text-7xl'>
              Let's get in touch
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
