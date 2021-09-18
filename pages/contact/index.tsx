import Box from '@material-ui/core/Box';
import React from 'react';
import { Header } from '../../src/components';
import ContactForm from '../../src/components/ContactForm';

export default function Index() {
  return (
    <Box>
      <Header isContact />
      <ContactForm />
    </Box>
  )
}
