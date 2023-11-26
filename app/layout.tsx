import './containers.css'; //entfernen
import 'sh_theme/globals.scss';

import { IBM_Plex_Sans_Condensed, Montserrat } from 'next/font/google';

const raleway = Montserrat({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
  subsets: ["latin"],
});

const roboto_slab = IBM_Plex_Sans_Condensed({
  fallback: ["serif"],
  subsets: ["latin"],
  weight: ["600"],
});

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className={raleway.className + " " + roboto_slab.className}>
      {children}
    </main>
  )
}
