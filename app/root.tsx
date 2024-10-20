import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useRouteError,
} from '@remix-run/react';
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full" lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="bg-primary text-secondary font-arial h-full">
    {children}
    <ScrollRestoration />
    <Scripts />
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
