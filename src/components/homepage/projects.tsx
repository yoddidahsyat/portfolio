import { projects } from '@/data/projects';

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <section className='min-h-screen' id='projects'>
      <div className='container mx-auto py-16 grid grid-cols-1 sm:grid-cols-3'>
        <div className='col flex justify-start'>
          <h1 className='font-light sticky bottom-16 mt-auto text-4xl'>
            My Projects
          </h1>
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
