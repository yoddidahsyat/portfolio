import { leftMenu, rightMenu } from '@/components/navbar/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  return (
    <NavigationMenu className='container fixed py-10 text-lg z-50 lg:flex justify-between max-w-none sm:px-4 px-2 hidden'>
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <NavigationMenuLink href='#home'>yoddidahsyat</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem> &mdash; </NavigationMenuItem>
        {leftMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <NavigationMenuLink href={menu.link}>
              {menu.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className='flex gap-10'>
        {rightMenu.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <NavigationMenuLink href={menu.link}>
              {menu.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
