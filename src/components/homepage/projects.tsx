'use client';

import { motion } from 'motion/react';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <section className='min-h-screen' id='projects'>
      <div className='container mx-auto px-2 py-16 grid grid-cols-1 sm:grid-cols-2 sm:px-0 md:px-6'>
        <div className='col sticky bottom-16 mt-auto space-y-4 max-w-sm'>
          <motion.h1
            className='break-words font-light text-4xl leading-tight sm:text-6xl lg:text-7xl'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Projects I've Worked On
          </motion.h1>
        </div>
        <div>
          {projects.map((project) => (
            <div key={project.title} className='h-screen flex items-center'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
