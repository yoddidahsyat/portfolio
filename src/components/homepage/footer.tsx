'use client';

import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import useCopy from '@/hooks/useCopy';

import ColoredLink from '@/components/links/ColoredLink';
import IconLink from '@/components/links/IconLink';

const CTA = () => {
  const { copied, copy } = useCopy();

  return (
    <section className='h-screen relative' id='contact'>
      <div className='container mx-auto flex h-full flex-col justify-end gap-6 px-2 pb-10 sm:gap-8 sm:px-0 sm:pb-16 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className='break-words font-light text-4xl leading-tight sm:text-6xl lg:text-7xl'>
            Let's <span className='text-primary-500'>collaborate</span>!
          </h1>
        </motion.div>

        <motion.div
          className='h-px w-full bg-zinc-200'
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />

        <motion.div
          className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className='flex w-full flex-col gap-1 py-3 sm:w-auto sm:min-w-[22rem]'>
            <span className='text-xs uppercase tracking-wide text-zinc-500'>
              Say hello at
            </span>
            <div className='flex min-w-0 items-center gap-1'>
              <ColoredLink
                href='mailto:yoddi.dahsyat@gmail.com'
                className='min-w-0 truncate text-base font-light sm:text-lg'
                openNewTab
              >
                yoddi.dahsyat@gmail.com
              </ColoredLink>
              <button
                onClick={() => copy('yoddi.dahsyat@gmail.com')}
                className='flex flex-shrink-0 items-center gap-2 rounded-full p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-black'
                title={copied ? 'Copied!' : 'Copy email'}
              >
                {copied ? (
                  <>
                    <Check className='h-4 w-4 text-primary-700' />
                    <span className='whitespace-nowrap text-sm text-primary-700'>
                      Email Copied!
                    </span>
                  </>
                ) : (
                  <Copy className='h-4 w-4' />
                )}
              </button>
            </div>
          </div>

          <div className='flex gap-3'>
            <IconLink
              href='https://github.com/yoddidahsyat'
              icon={FaGithub}
              className='min-h-11 min-w-11 rounded-full md:min-h-12 md:min-w-12 text-black border-black hover:bg-black hover:text-white'
              aria-label='GitHub'
            />
            <IconLink
              href='https://www.linkedin.com/in/yoddidahsyat'
              icon={FaLinkedin}
              className='min-h-11 min-w-11 rounded-full md:min-h-12 md:min-w-12 text-black border-black hover:bg-black hover:text-white'
              aria-label='LinkedIn'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
