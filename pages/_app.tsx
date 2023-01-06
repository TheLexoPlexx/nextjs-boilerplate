import type { AppProps } from 'next/app';

import '../styles/containers.css'; //entfernen
import '../sh_theme/globals.scss';

import { Raleway, Roboto_Slab } from '@next/font/google';

const raleway = Raleway({
  fallback: [ "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif" ],
  subsets: [ "latin" ],
});

const roboto_slab = Roboto_Slab({
  fallback: [ "serif" ],
  subsets: [ "latin"],
  weight: [ "600" ],
});

function App({ Component, pageProps }: AppProps) {
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

export default App
