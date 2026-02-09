import { Badge } from '@/components/ui/badge';

const Summary = () => {
  const stacks = [
    'Wordpress',
    'React.js',
    'Next.js',
    'Node.js',
    'Typescript',
    'Javascript',
    'PHP',
    'Laravel',
    'CodeIgniter',
    'Tailwind CSS',
    'Bootstrap',
    'HTML',
    'CSS',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Git',
    'GitHub',
    'GitLab',
  ];
  return (
    <section className='h-screen scroll-smooth' id='about'>
      <div className='container h-full mx-auto py-16 grid grid-cols-3'>
        <div className='lg:col-span-1 col-span-3 flex justify-between flex-col'>
          <div className='space-y-4' />
          <h2 className=' text-2xl sm:text-4xl font-light leading-normal'>
            I build websites that help businesses{' '}
            <span className='text-primary-500'>launch faster</span> and{' '}
            <span className='text-primary-500'>work smarter</span>.
          </h2>
          <div className='space-y-4'>
            <p>
              I'm Yoddi, a web developer with experience building websites and
              web applications for brands, startups, and internal teams.
            </p>
            <p>
              I focus on creating clean, functional, and scalable solutions —
              from landing pages to full web apps — with an emphasis on
              usability and real business needs.
            </p>
          </div>
        </div>
        <div className='lg:col-start-3 col-span-3 flex items-end'>
          <div className='flex flex-wrap space-y-4 space-x-2 justify-center'>
            {stacks.map((stack) => (
              <Badge
                key={stack}
                className={`hover:bg-primary-100 cursor-default text-zinc-800 ${
                  stack === 'Wordpress' ? 'bg-primary-200' : 'bg-zinc-100 '
                }`}
              >
                {stack}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
