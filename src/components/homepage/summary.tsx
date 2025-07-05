import UnderlineLink from '@/components/links/UnderlineLink';
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
        <div className='grid grid-rows-6 sm:col-span-1 col-span-2'>
          <h2 className='sm:row-span-3 row-span-2 text-2xl sm:text-4xl font-light leading-normal'>
            learn, code, and bring impact to the world.
          </h2>
          <p>
            My name is Mohammad Yoddi Dahsyat, a Full-Stack Developer based in
            Indonesia. My main stacks are Next.js and Node.js, but I also have
            experience in PHP and Laravel.
          </p>
          <p>
            Currently working at{' '}
            <UnderlineLink
              href='https://vaforeveryone.com.au'
              className='text-primary-500 text-base border-none font-normal'
              openNewTab
            >
              VA For Everyone
            </UnderlineLink>
            , a Virtual Assistant agency based in Australia. I usually handle
            both frontend and backend of client's web application, with various
            stacks and architecture.
          </p>
          <p>
            Feel free to contact me on{' '}
            <UnderlineLink
              href='mailto:yoddidahsyat@gmail.com'
              className='text-primary-500 text-base border-none font-normal'
              openNewTab
            >
              yoddi.dahsyat@gmail.com
            </UnderlineLink>
          </p>
        </div>
        <div className='sm:col-start-3 flex items-center'>
          <div className='flex flex-wrap space-y-4 space-x-2 justify-center'>
            {stacks.map((stack) => (
              <Badge
                key={stack}
                className='hover:bg-primary-100 cursor-default bg-zinc-100'
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
