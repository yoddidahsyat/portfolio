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
  // {
  //   title: 'Everywhere',
  //   description: 'Seamless Villa Booking Experience',
  //   content:
  //     'A modern web app for discovering and booking villas across the UAE. In this project, my role is as a frontend developer. I mostly work on building the user interface and the functionality of the website. I have learned how to use the MaterialUI with Next.js, and how to integrate with the Google Maps API.One of the challenges I faced was to build the responsive design expecially for the dynamic island for the search feature. ',
  //   stacks: ['Next.js', 'Typescript', 'MaterialUI'],
  //   images: {
  //     laptop: '/images/projects/everywhere-laptop.png',
  //     mobile: '/images/projects/everywhere-mobile.png',
  //   },
  //   link: 'https://everywhere-five.vercel.app/',
  // },
  {
    title: 'Yamiyo Project',
    description:
      'Powering a streetwear digital brand with visual storytelling and modern performance',
    content:
      'Yamiyo Project is a streetwear digital brand that I conceptualized and built from the ground up. The website serves as the foundation for future limited product drops and brand storytelling. As the founder and developer, I handled product direction, website architecture, visual implementation, and performance optimization using WordPress. The focus was on building a scalable platform with strong visual identity, responsive design, and a structure ready for future e-commerce expansion.',
    stacks: ['WordPress'],
    images: {
      laptop: '/images/projects/yamiyo-laptop.png',
      mobile: '/images/projects/yamiyo-mobile.png',
    },
    link: 'https://yamiyoproject.com/',
  },
  {
    title: 'Responsible Investment Association Australasia (RIAA)',
    description:
      'Connecting responsible investors across Australasia with custom administration tools',
    content:
      'RIAA is a non-profit organization providing education and resources for responsible investors across Australasia. I worked as a fullstack developer contributing to both frontend and backend development. My responsibilities included building and maintaining the public website, developing an internal admin panel, and implementing a custom form builder system. I worked with AngularJS for frontend development, Laravel for backend logic and APIs, and Craft CMS for content management. This role required adapting quickly to new technologies while delivering stable, production-ready features.',
    stacks: ['Laravel', 'AngularJS', 'Craft CMS'],
    images: {
      laptop: '/images/projects/riaa.png',
      mobile: '/images/projects/riaa.png',
    },
    link: 'https://www.responsiblereturns.com.au/',
  },
  {
    title: 'Carpentry Australia',
    description:
      "Connecting licensed carpenters and homeowners on Australia's most trusted trade network",
    content:
      'Carpentry Australia is a massive portal for Australian carpenters to showcase their profiles and projects. Built with WordPress and Laravel, it connects licensed, reviewed carpenters across Australia with homeowners and builders, serving as Australia’s most trusted carpentry network.',
    stacks: ['WordPress', 'Laravel'],
    images: {
      laptop: '/images/projects/carpentry-australia.png',
      mobile: '/images/projects/carpentry-australia.png',
    },
    link: 'https://carpentryaustralia.com.au/',
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
