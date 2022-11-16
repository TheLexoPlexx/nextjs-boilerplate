import type { AppProps } from 'next/app';

import '../styles/containers.css'; //entfernen
import '../styles/globals.scss';

import { Raleway, Roboto_Slab } from '@next/font/google';

const raleway = Raleway({
  fallback: [ "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif" ],
  subsets: [ "latin" ],
});

const roboto_slab = Roboto_Slab({
  fallback: [ "serif" ],
  subsets: [ "latin"],
  variable: "--font-hx"
});

function App({ Component, pageProps }: AppProps) {
  const dummy_hx = roboto_slab.className
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
