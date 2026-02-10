'use client';

import { Check, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import useCopy from '@/hooks/useCopy';

import ColoredLink from '@/components/links/ColoredLink';
import IconLink from '@/components/links/IconLink';

const UpperCta = () => {
  const { copied, copy } = useCopy();
  return (
    <section className='my-40 container mx-auto relative flex flex-col justify-center gap-6'>
      <div>
        <h2 className='font-light sm:text-6xl'>Have a project in mind?</h2>
      </div>
      <div className='row-start-4 flex items-center gap-4'>
        <p>
          Feel free to contact me at{' '}
          <ColoredLink
            href='mailto:yoddidahsyat@gmail.com'
            className='text-primary-500 text-base font-normal'
            openNewTab
          >
            yoddi.dahsyat@gmail.com
          </ColoredLink>
        </p>
        <button
          onClick={() => copy('yoddi.dahsyat@gmail.com')}
          className='p-1 hover:bg-gray-100 rounded transition-colors duration-200'
          title={copied ? 'Copied!' : 'Copy email'}
        >
          {copied ? (
            <div className='flex items-center gap-2'>
              <Check className='w-4 h-4 text-primary-700' />
              <span className='text-sm text-primary-700'>Email Copied!</span>
            </div>
          ) : (
            <Copy className='w-4 h-4 text-gray-600 hover:text-gray-800' />
          )}
        </button>
        <IconLink
          href='https://github.com/yoddidahsyat'
          icon={FaGithub}
          className='text-black hover:text-primary-500 border-none'
          aria-label='GitHub'
        />
        <IconLink
          href='https://www.linkedin.com/in/yoddidahsyat'
          icon={FaLinkedin}
          className='text-black hover:text-primary-500 border-none'
          aria-label='LinkedIn'
        />
      </div>
    </section>
  );
};

export default UpperCta;
