import Link from 'next/link';

const CTA = () => {
  return (
    <section className='h-screen container mx-auto text-4xl grid grid-rows-5'>
      <div className='row-start-3 flex flex-col gap-8'>
        <h1 className='font-light'>Reach me out on</h1>
        <Link href='mailto:yoddi.dahsyat@gmail.com' className='font-light'>
          yoddi.dahsyat@gmail.com
        </Link>
      </div>
      <div className='row-start-5 flex gap-12 font-light'>
        <Link href='https://github.com/yoddidahsyat'>github</Link>
        <Link href='https://www.linkedin.com/in/yoddidahsyat'>linkedin</Link>
      </div>
    </section>
  );
};

export default CTA;
