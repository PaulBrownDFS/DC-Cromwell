import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Dynamic Content Tools v1.0
        </Typography>
        <Link href="/bannerTest">Banner Test</Link>
      </Box>
    </Container>
  );
}
