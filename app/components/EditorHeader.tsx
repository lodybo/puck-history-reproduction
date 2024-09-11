import { ComponentProps, ReactNode, useState } from 'react';
import { Puck, usePuck } from '@measured/puck';
import WatershedLogo from '~/components/WatershedLogo';
import Button from '~/components/Button';
import { Link } from '@remix-run/react';

type Props = Pick<ComponentProps<typeof Puck>, 'onPublish'>

export default function EditorHeader({ onPublish }: Props) {
  const { appState } = usePuck();
  const [ isPublishing, setIsPublishing ] = useState(false);

  const publish = () => {
    setIsPublishing(true);
    if (onPublish) {
      onPublish(appState.data)
    }
  }

  return (
    <div className="border-b-4 border-b-secondary flex flex-row items-center justify-between h-32 px-12">
      <ul className="flex flex-row items-center space-x-4 w-full max-w-screen-lg mx-auto">
        <li className="h-32 w-32">
          <Link to="/">
            <WatershedLogo/>
          </Link>
        </li>
        <FauxNavigationLink>Home</FauxNavigationLink>
        <FauxNavigationLink>Evenementen</FauxNavigationLink>
        <FauxNavigationLink>Team</FauxNavigationLink>
        <FauxNavigationLink>Over ons</FauxNavigationLink>
      </ul>

      { onPublish ? (
        <Button disabled={isPublishing} onClick={publish}>
          Opslaan
        </Button>
      ) : null }
    </div>
  );
}

type NavigationLinkProps = {
  children: ReactNode;
};

function FauxNavigationLink({ children }: NavigationLinkProps) {
  return (
    <li className="w-32 h-8 flex flex-row justify-center items-center border-r-2 border-r-secondary">
      {children}
    </li>
  );
}
