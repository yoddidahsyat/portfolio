'use client';

import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import useCopy from '@/hooks/useCopy';

import ColoredLink from '@/components/links/ColoredLink';
import IconLink from '@/components/links/IconLink';

const UpperCta = () => {
  const { copied, copy } = useCopy();
  return (
    <section
      id='project-cta'
      className='my-40 w-full py-20 bg-zinc-900 text-zinc-50 relative flex flex-col justify-center gap-6'
    >
      <div className='container mx-auto flex flex-col justify-center gap-6 px-2 sm:px-0 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className='break-words font-light text-4xl leading-tight sm:text-6xl lg:text-7xl'>
            Have a project in mind?
          </h2>
        </motion.div>
        <motion.div
          className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <p className='flex flex-wrap items-center gap-1'>
            Feel free to contact me at{' '}
            <span className='inline-flex items-center gap-1'>
              <ColoredLink
                href='mailto:yoddidahsyat@gmail.com'
                className='text-primary-500 text-base font-normal hover:text-white'
                openNewTab
              >
                yoddi.dahsyat@gmail.com
              </ColoredLink>
              <button
                onClick={() => copy('yoddi.dahsyat@gmail.com')}
                className='flex-shrink-0 p-1 hover:bg-zinc-800 rounded transition-colors duration-200'
                title={copied ? 'Copied!' : 'Copy email'}
              >
                {copied ? (
                  <div className='flex items-center gap-2'>
                    <Check className='w-4 h-4 text-primary-400' />
                    <span className='text-sm text-primary-400'>
                      Email Copied!
                    </span>
                  </div>
                ) : (
                  <Copy className='w-4 h-4 text-zinc-400 hover:text-zinc-50' />
                )}
              </button>
            </span>
          </p>
          <div className='flex items-center gap-3'>
            <IconLink
              href='https://github.com/yoddidahsyat'
              icon={FaGithub}
              className='text-zinc-50 hover:text-primary-500 border-none'
              aria-label='GitHub'
            />
            <IconLink
              href='https://www.linkedin.com/in/yoddidahsyat'
              icon={FaLinkedin}
              className='text-zinc-50 hover:text-primary-500 border-none'
              aria-label='LinkedIn'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpperCta;
