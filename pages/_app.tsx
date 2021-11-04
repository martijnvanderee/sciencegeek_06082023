import React from 'react';
import 'tailwindcss/tailwind.css'

// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';

//state
import { IsMenuOpenProvider } from '../state/isMenuOpen'
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={`#250352`} />
        {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}

        <title>ScienceGeek</title>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/ico/sciencegeekLogo.ico" />

        <meta name="description" content="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws. Over onder andere fossielen,ruimtevaart, de zoektocht naar aliens, sex, psychologie, milieu en geschiedenis.
" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap" rel="stylesheet" />
      </Head>

      <IsMenuOpenProvider>
        <IsSearchMenuOpenProvider>
          <Component {...pageProps} />
        </IsSearchMenuOpenProvider>
      </IsMenuOpenProvider>
    </>
  );
};

export default MyApp;