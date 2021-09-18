import Box from '@material-ui/core/Box';
import React from 'react';
import { Header, PresentationSection, TechnologiesSection } from '../src/components';
import Footer from '../src/components/Footer';

export default function Index() {
  return (
    <Box>
      {/* <Head>
        <title>Leonardo Casagrande | Front-End Developer</title>
        <meta name="description" content="Leonardo Casagrande's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <PresentationSection />
      <TechnologiesSection />
      <Footer />
    </Box>
  )
}
