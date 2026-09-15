'use client';

import { Menu, X } from 'lucide-react';
import { useRef } from 'react';

import { cn } from '@/lib/utils';
import useDarkSectionOverlap from '@/hooks/useDarkSectionOverlap';
import useHideOnScroll from '@/hooks/useHideOnScroll';

import IconButton from '@/components/buttons/IconButton';
import { mobileMenu } from '@/components/navbar/menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const NavbarMobile = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const isOverDark = useDarkSectionOverlap('project-cta', logoRef);
  const isVisible = useHideOnScroll();

  return (
    <NavigationMenu
      className={cn(
        'max-w-none left-0 w-[calc(100%-var(--scrollbar-w,0px))] sm:inset-x-0 sm:w-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto fixed top-0 py-4 text-lg z-50 flex justify-between px-2 sm:px-0 md:px-6 lg:hidden transition-transform duration-300',
        !isVisible && '-translate-y-full'
      )}
    >
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <NavigationMenuLink
            ref={logoRef}
            className={cn(
              'transition-colors duration-300 hover:text-primary-500',
              isOverDark && 'text-white'
            )}
            href='#home'
          >
            yoddidahsyat
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Drawer>
        <DrawerTrigger asChild>
          <button
            className={cn(
              'p-2 transition-colors duration-300 hover:text-primary-500',
              isOverDark && 'text-white'
            )}
          >
            <Menu />
          </button>
        </DrawerTrigger>
        <DrawerContent className='h-3/4 bg-white'>
          <DrawerHeader className='relative'>
            <DrawerClose className='absolute right-4 top-4'>
              <IconButton variant='ghost' className='text-dark' icon={X} />
            </DrawerClose>
          </DrawerHeader>
          <div className='px-6 py-8'>
            <NavigationMenuList className='flex flex-col gap-6'>
              {mobileMenu.map((menu) => (
                <DrawerClose key={menu.link}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href={menu.link}
                      className={
                        menu.isButton
                          ? 'bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors inline-block text-center w-full'
                          : 'text-lg hover:text-primary-500 transition-colors'
                      }
                    >
                      {menu.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </DrawerClose>
              ))}
            </NavigationMenuList>
          </div>
        </DrawerContent>
      </Drawer>
    </NavigationMenu>
  );
};

export default NavbarMobile;
