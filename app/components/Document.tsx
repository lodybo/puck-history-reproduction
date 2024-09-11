import { ReactNode } from 'react';
import Header from '~/components/Header';

type Props = {
  children: ReactNode;
  header?: ReactNode;
  editMode?: boolean;
};

export default function Document({ children, header, editMode }: Props) {
  return (
    <div className="space-y-8 h-full">
      { header ?? <Header/> }

      <main className={ `px-8 w-full ${editMode ? '' : 'max-w-screen-lg'} mx-auto h-full` }>
        { children }
      </main>
    </div>
  );
}
