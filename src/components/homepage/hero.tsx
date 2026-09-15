'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='h-screen' id='home'>
      <div className='container mx-auto flex h-full items-end px-2 pb-16 sm:px-0 md:px-6'>
        <div className='flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between'>
          <motion.h1
            className='break-words font-light text-3xl leading-tight'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className='lg:text-9xl text-7xl pb-4'>
              Hi,
              <br /> I'm Yoddi
            </div>
            a <span className='text-primary-500'>fullstack developer</span>.
          </motion.h1>

          <motion.div
            className='relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full shadow-xl sm:h-44 sm:w-44'
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          >
            <Image
              src='/images/profile.jpeg'
              alt='Yoddi profile photo'
              fill
              sizes='(min-width: 640px) 176px, 160px'
              className='object-cover'
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
