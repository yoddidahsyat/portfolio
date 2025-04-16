import Link from 'next/link';

const Summary = () => {
  return (
    <section className='h-screen scroll-smooth' id='about'>
      <div className='container h-full mx-auto py-16 grid grid-cols-3'>
        <div className='grid grid-rows-6'>
          <div />
          <h2 className='row-span-2 text-4xl font-light leading-normal'>
            learn, code, and bring impact to the world.
          </h2>
          <p>
            My name is Mohammad Yoddi Dahsyat, a Full-Stack Developer based in
            Indonesia. My main stacks are Next.js and Node.js, but I also have
            experience in PHP and Laravel.
          </p>
          <p>
            Currently working at{' '}
            <Link
              href='https://vaforeveryone.com.au'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-600 hover:underline'
            >
              VA For Everyone
            </Link>
            , a Virtual Assistant agency based in Australia. I usually handle
            both frontend and backend of client's web application, with various
            stacks and architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
