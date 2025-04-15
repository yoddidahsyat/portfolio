export type TProject = {
  title: string;
  description: string;
  content: string;
  stacks: string[];
  images: {
    laptop: string;
    mobile: string;
  };
  link?: string;
  repo?: string;
};

export const projects: TProject[] = [
  {
    title: 'Everywhere',
    description: 'Seamless Villa Booking Experience',
    content:
      'A modern web app for discovering and booking villas across the UAE.',
    stacks: ['NextJs', 'Typescript', 'MaterialUI'],
    images: {
      laptop: '/images/projects/everywhere-laptop.png',
      mobile: '/images/projects/everywhere-mobile.png',
    },
    link: 'https://everywhere-five.vercel.app/',
  },
  {
    title: 'Coto Makassar Nusantara 88 Mori',
    description: 'Authentic Culinary Showcase',
    content:
      'A company profile website that highlights the rich flavors of Coto Makassar through stunning visuals, menu details, and a taste of tradition.',
    stacks: ['Wordpress'],
    images: {
      laptop: '/images/projects/coto-makassar-laptop.png',
      mobile: '/images/projects/coto-makassar-mobile.png',
    },
    link: 'https://cotomakassarnusantara.com/',
  },
  {
    title: 'Image-Text Scanner',
    description: 'Client-Side Text Recognition Tool',
    content:
      'A lightweight OCR application utilizing Tesseract.js to extract text from images directly in the browser. Supports multiple languages and ensures user privacy by performing all processing on the client side without server interaction.',
    stacks: ['NextJs', 'Typescript', 'Tesseract.js'],
    images: {
      laptop: '/images/projects/ocr-laptop.png',
      mobile: '/images/projects/ocr-mobile.png',
    },
    link: 'https://image-text-scanner.vercel.app/',
    repo: 'https://github.com/yoddidahsyat/ocr-tesseract',
  },
];
