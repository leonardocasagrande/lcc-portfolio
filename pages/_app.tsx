import { CssBaseline, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { theme } from '../src/theme';
import '../src/styles/globals.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Leonardo Casagrande | Developer</title>
        <meta name="description" content="Leonardo Casagrande's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="keyword"
          content="porfolio, javascript, developer, react, next, js, node"
        />

        <meta property="og:title" content="Leonardo Casagrande | Developer" />
        <meta
          property="og:description"
          content="Leonardo Casagrande's Portfolio"
        />
        <meta
          property="og:image"
          content="https://leonardocasagrande.com/logo.png"
        />
        <meta property="og:url" content="https://leonardocasagrande.com" />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
