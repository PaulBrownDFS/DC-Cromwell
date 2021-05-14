import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Dynamic Content Tools v1.01
        </Typography>
        <Box>
          <Link href="/bannerTest">Banner Test</Link>-
        </Box>
        <Box>
          <Link href="/typog">Typography Demo</Link> -
        </Box>
        <Box>
          <Link href="/content-006/cardlist">Ex Brands Cardlist Demo</Link> -
        </Box>
      </Box>
    </Container>
  );
}
