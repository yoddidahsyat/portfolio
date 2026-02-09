'use client';

import { Check, Copy } from 'lucide-react';

import useCopy from '@/hooks/useCopy';

import ColoredLink from '@/components/links/ColoredLink';

const CTA = () => {
  const { copied, copy } = useCopy();

  return (
    <section
      className='h-screen container mx-auto relative grid grid-rows-6'
      id='contact'
    >
      <div className='row-start-5'>
        <h1 className='font-light sm:text-8xl'>
          Let's <span className=''>collaborate</span>!
        </h1>
      </div>
      <div className='row-start-6 grid grid-cols-2'>
        <div>
          <p className='font-light sm:text-2xl flex items-center gap-2'>
            Say hello at{' '}
            <ColoredLink
              href='mailto:yoddi.dahsyat@gmail.com'
              className='font-light'
            >
              yoddi.dahsyat@gmail.com
            </ColoredLink>
            <button
              onClick={() => copy('yoddi.dahsyat@gmail.com')}
              className='p-1 hover:bg-gray-100 rounded transition-colors duration-200'
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? (
                <div className='flex items-center gap-2'>
                  <Check className='w-4 h-4 text-primary-700' />
                  <span className='text-sm text-primary-700'>
                    Email Copied!
                  </span>
                </div>
              ) : (
                <Copy className='w-4 h-4 text-gray-600 hover:text-gray-800' />
              )}
            </button>
          </p>
        </div>
        <div className='flex sm:flex-row flex-col gap-12 sm:text-2xl ml-auto'>
          <div>
            <ColoredLink
              href='https://github.com/yoddidahsyat'
              className='font-light text-black hover:text-primary-500'
            >
              github
            </ColoredLink>
          </div>
          <div>
            <ColoredLink
              href='https://www.linkedin.com/in/yoddidahsyat'
              className='font-light text-black hover:text-primary-500'
            >
              linkedin
            </ColoredLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
