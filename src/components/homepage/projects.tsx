import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <section className='min-h-screen' id='projects'>
      <div className='container mx-auto py-16 grid grid-cols-3'>
        <div className='col'>
          <h1 className='font-light sticky top-1/2 text-4xl'>My Projects</h1>
        </div>
        <div className='col-span-2'>
          {projects.map((project) => (
            <div className='h-screen' key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
