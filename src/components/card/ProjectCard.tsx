'use client';

import { ArrowUpRightFromSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/use-outside-click';

import { TProject } from '@/data/projects';

import ButtonLink from '@/components/links/ButtonLink';

const ProjectCard = ({ project }: { project: TProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isExpanded]);

  useOutsideClick(ref, () => setIsExpanded(false));

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
    >
      {/* INSIDE THE PROJECT CARD */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded ? (
          <div className='fixed inset-0 grid place-items-center z-[100]'>
            <motion.button
              key={`close-${project.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[101]'
              onClick={() => setIsExpanded(false)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${project.title}-${id}`}
              ref={ref}
              className='w-full max-w-[800px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-y-auto'
            >
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className='relative'
              >
                <Image
                  src={project.images.laptop}
                  alt={project.title}
                  width={640}
                  height={320}
                  className='w-full h-80 object-cover object-top'
                />
              </motion.div>

              <div className='flex-1 flex flex-col'>
                <div className='p-6'>
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className='font-medium text-neutral-700 text-2xl mb-2'
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    layoutId={`description-${project.title}-${id}`}
                    className='text-neutral-600 text-lg mb-4'
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='mb-6'
                  >
                    <h4 className='font-medium text-neutral-700 text-base mb-2'>
                      Tech Stack:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.stacks.map((stack) => (
                        <span
                          key={stack}
                          className='px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full'
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='mb-6'
                  >
                    <h4 className='font-medium text-neutral-700 text-base mb-2'>
                      About:
                    </h4>
                    <p className='text-neutral-600 text-base leading-relaxed'>
                      {project.content}
                    </p>
                  </motion.div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex gap-4 justify-end'
                  >
                    {project.repo && (
                      <ButtonLink
                        variant='light'
                        href={project.repo}
                        target='_blank'
                        rightIcon={ArrowUpRightFromSquare}
                      >
                        View repository
                      </ButtonLink>
                    )}
                    {project.link && (
                      <ButtonLink
                        variant='primary'
                        href={project.link}
                        target='_blank'
                        rightIcon={ArrowUpRightFromSquare}
                      >
                        View site
                      </ButtonLink>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* WHEN NOT EXPANDED (the card) */}
      <motion.div
        layoutId={`card-${project.title}-${id}`}
        className='w-full max-w-2xl mx-auto p-8'
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <div
          onClick={() => setIsExpanded(true)}
          className='flex gap-6 hover:bg-primary-50 flex-col w-full p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary-200'
        >
          <motion.div
            layoutId={`image-${project.title}-${id}`}
            className='relative'
          >
            <Image
              src={project.images.laptop}
              alt={project.title}
              width={640}
              height={320}
              className='w-full h-80 rounded-xl object-cover object-top shadow-lg'
            />
          </motion.div>

          <div className='flex flex-col items-center text-center space-y-4'>
            <motion.h3
              layoutId={`title-${project.title}-${id}`}
              className='font-semibold text-neutral-800 text-2xl'
              whileHover={{
                color: '#0891b2',
                transition: { duration: 0.2 },
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              layoutId={`description-${project.title}-${id}`}
              className='text-neutral-600 text-lg max-w-md'
            >
              {project.description}
            </motion.p>

            <div className='flex flex-wrap gap-2 justify-center'>
              {project.stacks.slice(0, 3).map((stack) => (
                <span
                  key={stack}
                  className='px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full'
                >
                  {stack}
                </span>
              ))}
              {project.stacks.length > 3 && (
                <span className='px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full'>
                  +{project.stacks.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};

export default ProjectCard;
