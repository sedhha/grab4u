import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>JustDrive</title>
        <link rel='icon' href='/images/g4u-icon.svg' />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
