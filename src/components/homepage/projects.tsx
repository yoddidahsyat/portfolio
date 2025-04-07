const Projects = () => {
  return (
    <section className='min-h-screen'>
      <div className='container mx-auto py-16 grid grid-cols-3'>
        <div className='col'>
          <h1 className='font-light sticky top-1/2 text-4xl'>My Projects</h1>
        </div>
        <div className='col-span-2'>
          <div className='h-screen'>
            <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
              <h1 className='font-medium'>Project A</h1>
            </div>
          </div>
          <div className='h-screen'>
            <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
              <h1 className='font-medium'>Project B</h1>
            </div>
          </div>
          <div className='h-screen'>
            <div className='p-4 rounded-xl h-5/6 bg-primary-700'>
              <h1 className='font-medium'>Project C</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
