'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2], [-100, 0]);

  return (
    <section className='min-h-screen' id='projects' ref={containerRef}>
      <div className='container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2'>
        <div className='col sticky bottom-16 mt-auto space-y-4 max-w-sm'>
          <motion.h1 className='font-light text-7xl' style={{ opacity, x }}>
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
