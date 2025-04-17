import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <section className='min-h-screen' id='projects'>
      <div className='container mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 gap-8'>
        <div className='col'>
          <h1 className='font-light sticky top-1/2 text-4xl'>My Projects</h1>
        </div>
        <div className='sm:col-span-2'>
          {projects.map((project) => (
            <div className='h-screen sm:my-0 my-8' key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
