import Box from '@material-ui/core/Box';
import React from 'react';
import {
  Header,
  PresentationSection,
  TechnologiesSection,
} from '../src/components';
import CollaborationsSection from '../src/components/CollaborationsSection';
import Footer from '../src/components/Footer';
import RecentWork from '../src/components/RecentWork';

export default function Index() {
  return (
    <Box>
      <Header />
      <PresentationSection />
      <TechnologiesSection />
      <RecentWork />
      <CollaborationsSection />
      <Footer />
    </Box>
  );
}
