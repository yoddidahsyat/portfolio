import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container fixed left-1/2 -translate-x-1/2 py-10 flex justify-between w-full text-lg'>
      <div className='flex gap-10'>
        <Link href='/'>yoddidahsyat</Link>
        &mdash;
        <Link href='/about'>about me</Link>
        <Link href='/projects'>my projects</Link>
      </div>
      <div className='flex gap-10'>
        <Link href='https://github.com/yoddidahsyat' target='_blank'>
          resume
        </Link>
        <Link href='mailto:yoddi.dahsyat@gmail.com'>
          yoddi.dahsyat@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
