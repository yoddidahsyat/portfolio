import UnderlineLink from '@/components/links/UnderlineLink';

const CTA = () => {
  return (
    <section
      className='h-screen container mx-auto relative grid grid-rows-6'
      id='contact'
    >
      <div className='row-start-5'>
        <h1 className='font-light sm:text-4xl'>Let's collaborate!</h1>
      </div>
      <div className='row-start-6 grid grid-cols-2'>
        <div>
          <p className='font-light sm:text-2xl'>
            Say hello at{' '}
            <UnderlineLink
              href='mailto:yoddi.dahsyat@gmail.com'
              className='font-light'
            >
              yoddi.dahsyat@gmail.com
            </UnderlineLink>
          </p>
        </div>
        <div className='flex sm:flex-row flex-col gap-12 sm:text-2xl ml-auto'>
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
      </div>
    </section>
  );
};

export default CTA;
