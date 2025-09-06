export type TProject = {
  title: string;
  description: string;
  content: string;
  stacks: string[];
  images: {
    laptop: string;
    mobile?: string;
  };
  link?: string;
  repo?: string;
};

export const projects: TProject[] = [
  {
    title: 'Everywhere',
    description: 'Seamless Villa Booking Experience',
    content:
      'A modern web app for discovering and booking villas across the UAE. In this project, my role is as a frontend developer. I mostly work on building the user interface and the functionality of the website. I have learned how to use the MaterialUI with Next.js, and how to integrate with the Google Maps API.One of the challenges I faced was to build the responsive design expecially for the dynamic island for the search feature. ',
    stacks: ['Next.js', 'Typescript', 'MaterialUI'],
    images: {
      laptop: '/images/projects/everywhere-laptop.png',
      mobile: '/images/projects/everywhere-mobile.png',
    },
    link: 'https://everywhere-five.vercel.app/',
  },
  {
    title: 'Responsible Investment Association Australasia (RIAA)',
    description: 'Admin panel, website, and form builder.',
    content:
      'RIAA is a non-profit organization that provides education and resources for investors. As a fullstack developer, I handle both frontend and backend using Angular.js, Laravel, and also a CMS using Craft CMS. None of them I have used before, so it was a great learning experience.',
    stacks: ['Laravel', 'Angular', 'Craft CMS'],
    images: {
      laptop: '/images/projects/riaa.png',
      mobile: '/images/projects/riaa.png',
    },
    link: 'https://www.responsiblereturns.com.au/',
  },
  {
    title: 'Coto Makassar Nusantara 88 Mori',
    description: 'Authentic Culinary Showcase',
    content:
      'This is a company profile website that highlights the rich flavors of Coto Makassar through stunning visuals, menu details, and a taste of tradition. I have worked on this project as a freelancer, I used Wordpress to deliver the website in a short time.',
    stacks: ['Wordpress'],
    images: {
      laptop: '/images/projects/coto-makassar-laptop.png',
      mobile: '/images/projects/coto-makassar-mobile.png',
    },
    link: 'https://cotomakassarnusantara.com/',
  },
];

export const allProjects = [
  ...projects,
  {
    title: 'Image-Text Scanner',
    description: 'Client-Side Text Recognition Tool',
    content:
      'A lightweight OCR (Optical Character Recognition) application utilizing Tesseract.js to extract text from images directly in the browser. Supports multiple languages and ensures user privacy by performing all processing on the client side without server interaction.',
  },
];
