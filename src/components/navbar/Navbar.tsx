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
          <UnstyledLink
            className='hover:text-primary-500 transition-colors'
            href='#home'
          >
            yoddidahsyat
          </UnstyledLink>
        </NavigationMenuItem>
        <NavigationMenuItem> &mdash; </NavigationMenuItem>
        {leftMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <UnstyledLink
              className='hover:text-primary-500 transition-colors'
              href={menu.link}
            >
              {menu.label}
            </UnstyledLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className='flex gap-10'>
        {rightMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <UnstyledLink
              className={
                menu.isButton
                  ? 'bg-primary-500 text-white hover:text-primary-500 px-4 py-2 hover:bg-transparent border border-primary-500  rounded-full transition-colors'
                  : 'hover:text-primary-500 transition-colors'
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
