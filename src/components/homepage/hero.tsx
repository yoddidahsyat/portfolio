'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='h-screen' id='home'>
      <div className='container mx-auto flex h-full items-end pb-16'>
        <div className='flex flex-col gap-6'>
          <motion.div
            className='relative h-40 w-40 overflow-hidden rounded-full shadow-xl sm:h-44 sm:w-44'
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
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

          <motion.h1
            className='text-3xl sm:text-6xl font-light'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Hi, I'm Yoddi &mdash; a{' '}
            <span className='font-semibold text-primary-500'>
              Full Stack Developer
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
