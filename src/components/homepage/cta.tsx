import UnderlineLink from '@/components/links/UnderlineLink';

const CTA = () => {
  return (
    <section
      className='h-screen container mx-auto relative grid grid-rows-6'
      id='contact'
    >
      <div className='row-start-4'>
        <h1 className='font-light text-4xl'>
          Ready to bring your next idea to life?
        </h1>
        <p className='font-light text-2xl'>
          Say hello at{' '}
          <UnderlineLink
            href='mailto:yoddi.dahsyat@gmail.com'
            className='font-light mt-4'
          >
            yoddi.dahsyat@gmail.com
          </UnderlineLink>
        </p>
      </div>
      <div className='flex gap-12 row-start-6 text-2xl'>
        <div>
          <UnderlineLink
            href='https://github.com/yoddidahsyat'
            className='font-light'
          >
            github
          </UnderlineLink>
        </div>
        <div>
          <UnderlineLink
            href='https://www.linkedin.com/in/yoddidahsyat'
            className='font-light'
          >
            linkedin
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
