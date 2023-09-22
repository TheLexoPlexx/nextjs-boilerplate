import type { AppProps } from 'next/app';

import './containers.css'; //entfernen
import 'sh_theme/globals.scss';
import "styles/btc_akdm_theme.scss";

import { IBM_Plex_Sans_Condensed, Montserrat } from '@next/font/google';

const raleway = Montserrat({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
  subsets: ["latin"],
});

const roboto_slab = IBM_Plex_Sans_Condensed({
  fallback: ["serif"],
  subsets: ["latin"],
  weight: ["600"],
});

export default function Layout({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <style jsx global>
        {`
        :root {
          --font-hx: ${roboto_slab.style.fontFamily};
        }
      `}
      </style>
      <Component {...pageProps} />
    </main>
  )
}
