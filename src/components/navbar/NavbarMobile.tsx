import { Menu, X } from 'lucide-react';

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
  return (
    <NavigationMenu className='container fixed top-0 py-10 text-lg z-50 flex justify-between w-full max-w-none sm:px-4 px-2 lg:hidden'>
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <NavigationMenuLink href='#home'>yoddidahsyat</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Drawer>
        <DrawerTrigger asChild>
          <button className='p-2'>
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
