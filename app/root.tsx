import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/server-runtime";

import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";
import customStylesUrl from "~/styles/custom.css";
import navbarStylesUrl from "~/components/Navbar/Navbar.css";
import Navbar from "./components/Navbar/Navbar";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "stylesheet",
      href: customStylesUrl
    },
    { rel: "stylesheet", href: navbarStylesUrl },
  ];
};

export default function App() {
  return (
    <>
      <Document>
        <Outlet />
      </Document>
    </>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const location = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {location.pathname !== '/login' && (
          <header className="remix-app__header">
            <Navbar />
          </header>
        )}
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>

    </html>
  );
}

