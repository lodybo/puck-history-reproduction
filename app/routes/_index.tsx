import { MetaFunction } from '@remix-run/node';
import Header from '~/components/Header';

export const meta: MetaFunction = () => {
  return [
    { title: "Puck Editor CMS" },
  ];
};

export async function loader() {
  return null;
}

export default function Index() {
  return (
    <div className="space-y-8">
      <Header />

      <main className="w-full max-w-screen-lg mx-auto">
        <h1>Hello from index</h1>
      </main>
    </div>
  );
}
