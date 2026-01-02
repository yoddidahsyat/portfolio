'use client';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className='h-screen' id='home'>
      <div className='container mx-auto flex h-full items-end pb-16'>
        <motion.h1
          className='text-3xl sm:text-6xl font-light'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Hi, I'm Yoddi &mdash; a{' '}
          <span className='font-semibold text-primary-500'>
            Full Stack Developer
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
