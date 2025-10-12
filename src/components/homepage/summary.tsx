import ColoredLlink from '@/components/links/ColoredLink';
import { Badge } from '@/components/ui/badge';

const Summary = () => {
  const stacks = [
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
    'MySQL',
    'PostgreSQL',
    'MongoDB',
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
            learn, code, and bring{' '}
            <span className='text-primary-500'>impact</span> to the world.
          </h2>
          <div className='space-y-4'>
            <p>
              Based in Indonesia, I specialize in building and optimizing web
              applications primarily with Next.js and Node.js. My current
              experience at{' '}
              <ColoredLlink
                href='https://vaforeveryone.com.au'
                className='text-primary-500 text-base font-normal'
                openNewTab
              >
                VA For Everyone
              </ColoredLlink>{' '}
              involves seamlessly handling both the frontend and backend of
              various client projects, utilizing everything from modern Next.js
              to legacy PHP/Laravel systems.
            </p>
            <p>
              I can quickly assess any project, regardless of its tech stack,
              and deliver elegant, efficient solutions. If you need a developer
              who can handle a complex integration or deliver a reliable
              application from concept to deployment, let's connect.
            </p>
            <p>
              Feel free to contact me at{' '}
              <ColoredLlink
                href='mailto:yoddidahsyat@gmail.com'
                className='text-primary-500 text-base font-normal'
                openNewTab
              >
                yoddi.dahsyat@gmail.com
              </ColoredLlink>
            </p>
          </div>
        </div>
        <div className='lg:col-start-3 col-span-3 flex items-end'>
          <div className='flex flex-wrap space-y-4 space-x-2 justify-center'>
            {stacks.map((stack) => (
              <Badge
                key={stack}
                className={`hover:bg-primary-100 cursor-default text-zinc-800 ${
                  stack === 'Next.js' ? 'bg-primary-200' : 'bg-zinc-100 '
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
