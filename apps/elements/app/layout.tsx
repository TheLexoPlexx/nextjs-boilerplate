import './containers.css'; //entfernen
import { Theme } from "sh_canvas"

import { IBM_Plex_Sans_Condensed, Montserrat } from 'next/font/google';

const font_default = Montserrat({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
  subsets: ["latin"],
});

const font_header = IBM_Plex_Sans_Condensed({
  fallback: ["serif"],
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Theme
      default_font_classname={font_default.className}
      header_font_classname={font_header.className}
    >
      {children}
    </Theme >
  )
}
