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
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className='h-3/4'>
          <DrawerHeader>
            <DrawerClose className='absolute right-4 top-4'>
              <IconButton variant='ghost' className='text-dark' icon={X} />
            </DrawerClose>
          </DrawerHeader>
          <NavigationMenuList className='flex flex-col gap-10'>
            {mobileMenu.map((menu) => (
              <DrawerClose key={menu.link}>
                <NavigationMenuItem>
                  <NavigationMenuLink href={menu.link}>
                    {menu.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </DrawerClose>
            ))}
          </NavigationMenuList>
        </DrawerContent>
      </Drawer>
    </NavigationMenu>
  );
};

export default NavbarMobile;
