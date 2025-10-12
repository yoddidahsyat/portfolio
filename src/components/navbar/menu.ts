export interface MenuItem {
  link: string;
  label: string;
  isButton?: boolean;
}

export const leftMenu: MenuItem[] = [
  {
    link: '#about',
    label: 'about',
  },
  {
    link: '#projects',
    label: 'projects',
  },
];

export const rightMenu: MenuItem[] = [
  {
    link: '/docs/Mohammad Yoddi Dahsyat - Fullstack Developer - Resume.pdf',
    label: 'resume',
  },
  {
    link: '#contact',
    label: 'contact me',
    isButton: true,
  },
];

export const mobileMenu: MenuItem[] = leftMenu.concat(rightMenu);
