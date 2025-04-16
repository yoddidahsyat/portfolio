import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container fixed left-1/2 -translate-x-1/2 py-10 flex justify-between w-full text-lg z-50'>
      <div className='flex gap-10'>
        <Link href='#home'>yoddidahsyat</Link>
        &mdash;
        <Link href='#about'>about</Link>
        <Link href='#projects'>projects</Link>
        <Link href='#contact'>contact</Link>
      </div>
      <div className='flex gap-10'>
        <Link
          href='/docs/Mohammad Yoddi Dahsyat - Full-Stack Developer - Resume.pdf'
          target='_blank'
        >
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
