'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import useDarkSectionOverlap from '@/hooks/useDarkSectionOverlap';
import useHideOnScroll from '@/hooks/useHideOnScroll';

import UnstyledLink from '@/components/links/UnstyledLink';
import { rightMenu } from '@/components/navbar/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const isOverDark = useDarkSectionOverlap('project-cta', logoRef);
  const isVisible = useHideOnScroll();

  return (
    <NavigationMenu
      className={cn(
        'max-w-none left-0 w-[calc(100%-var(--scrollbar-w,0px))] lg:inset-x-0 lg:w-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto fixed top-0 py-5 text-lg z-50 lg:flex justify-between px-2 sm:px-0 md:px-6 hidden transition-transform duration-300',
        !isVisible && '-translate-y-full'
      )}
    >
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <UnstyledLink
            ref={logoRef}
            className={cn(
              'transition-colors duration-300 hover:text-primary-500',
              isOverDark && 'text-white'
            )}
            href='#home'
          >
            yoddidahsyat
          </UnstyledLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='flex gap-10'>
        {rightMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <UnstyledLink
              className={
                menu.isButton
                  ? 'bg-primary-500 text-white hover:text-primary-500 px-4 py-2 hover:bg-transparent border border-primary-500 rounded-full transition-colors'
                  : cn(
                      'transition-colors hover:text-primary-500',
                      isOverDark && 'text-white'
                    )
              }
              href={menu.link}
              openNewTab={!menu.isButton}
            >
              {menu.label}
            </UnstyledLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
