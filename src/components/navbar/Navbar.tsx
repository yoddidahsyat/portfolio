import UnstyledLink from '@/components/links/UnstyledLink';
import { leftMenu, rightMenu } from '@/components/navbar/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  return (
    <NavigationMenu className='container fixed py-10 text-lg z-50 lg:flex justify-between max-w-none sm:px-4 px-2 hidden'>
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <UnstyledLink className='hover:text-primary-500' href='#home'>
            yoddidahsyat
          </UnstyledLink>
        </NavigationMenuItem>
        <NavigationMenuItem> &mdash; </NavigationMenuItem>
        {leftMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <UnstyledLink className='hover:text-primary-500' href={menu.link}>
              {menu.label}
            </UnstyledLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className='flex gap-10'>
        {rightMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <UnstyledLink
              className='hover:text-primary-500'
              href={menu.link}
              openNewTab
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
