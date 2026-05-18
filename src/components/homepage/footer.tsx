'use client';

import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

import useCopy from '@/hooks/useCopy';

import ColoredLink from '@/components/links/ColoredLink';

const CTA = () => {
  const { copied, copy } = useCopy();

  return (
    <section
      className='h-screen container mx-auto relative grid grid-rows-6'
      id='contact'
    >
      <motion.div
        className='row-start-5'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className='font-light text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>
          Let's <span className=''>collaborate</span>!
        </h1>
      </motion.div>
      <motion.div
        className='row-start-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <div className='font-light text-2xl'>
          <p className='whitespace-nowrap'>Say hello at</p>
          <div className='mt-1 flex items-center gap-2'>
            <ColoredLink
              href='mailto:yoddi.dahsyat@gmail.com'
              className='font-light'
            >
              yoddi.dahsyat@gmail.com
            </ColoredLink>
            <button
              onClick={() => copy('yoddi.dahsyat@gmail.com')}
              className='rounded p-1 transition-colors duration-200 hover:bg-gray-100'
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? (
                <div className='flex items-center gap-2'>
                  <Check className='h-4 w-4 text-primary-700' />
                  <span className='text-sm text-primary-700'>
                    Email Copied!
                  </span>
                </div>
              ) : (
                <Copy className='h-4 w-4 text-gray-600 hover:text-gray-800' />
              )}
            </button>
          </div>
        </div>
        <div className='ml-0 flex flex-col gap-4 text-xl sm:ml-auto sm:flex-row sm:gap-8 sm:text-2xl'>
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
      </motion.div>
    </section>
  );
};

export default CTA;
