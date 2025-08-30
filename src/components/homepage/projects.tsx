import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <section className='min-h-screen' id='projects'>
      <div className='container mx-auto py-16 grid grid-cols-1 sm:grid-cols-3'>
        <div className='col sticky bottom-16 mt-auto space-y-4'>
          <h1 className='font-light text-4xl'>Selected Projects</h1>
        </div>
        <div className='sm:col-span-2 grid gap-4'>
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
