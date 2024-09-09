import WatershedLogo from '~/components/WatershedLogo';
import { NavLink } from '@remix-run/react';
import { ReactNode } from 'react';

export default function Header() {
  return (
    <div className="border-b-4 border-b-secondary flex flex-row items-center h-32">
      <ul className="flex flex-row items-center space-x-4 w-full max-w-screen-lg mx-auto">
        <li className="h-32 w-32">
          <WatershedLogo/>
        </li>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/evenementen">Evenementen</NavigationLink>
        <NavigationLink href="/team">Team</NavigationLink>
        <NavigationLink href="/over-ons">Over ons</NavigationLink>
      </ul>
    </div>
  );
}

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
};

function NavigationLink({ href, children }: NavigationLinkProps) {
  return (
    <li className="w-32 h-8 flex flex-row justify-center items-center border-r-2 border-r-secondary has-[.is-active]:bg-secondary has-[.is-active]:text-white ">
      <NavLink
        className={({ isActive }) => isActive ? 'is-active' : '' }
        to={href}
      >
        {children}
      </NavLink>
    </li>
  );
}
