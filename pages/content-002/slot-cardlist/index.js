import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Card from '../../../src/components/content-002/card';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Grid,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { getQueryParam } from '../../../src/functions';

const Cardlist = () => {
  const [cardlist, setCardlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  useEffect(() => {
    let contentId = getQueryParam('content');

    if (!contentId) {
      contentId = '31517ed7-f89a-4549-ba8c-735b8f859ca5'; // Fallback content id if none supplied
    }

    // Amplience Dynamic content DFSv2 Staging URL
    const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/content-002/slot_cardlist';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCardlist(data);
        setLoading(false);
        console.log('data', data);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Content-002 Cardlist Preview | Dynamic Content Preview</title>
      </Head>
      {loading ? (
        <Box textAlign="center">
          <Typography variant="body2">
            Loading Content, please wait ..
          </Typography>
        </Box>
      ) : (
        <>
          <Container fixed maxWidth="xl" disableGutters={true}>
            <Box id="fixedWidthWrapper" padding="20px 0">
              <Grid
                container
                justify="center"
                className={
                  desktop ? 'MuiGrid-spacing-xs-3 ' : 'MuiGrid-spacing-xs-1'
                }
              >
                {cardlist.content.content002_slot[0].cards.map(
                  (card, index) => (
                    <Card card={card} key={`card${index}`}></Card>
                  )
                )}
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </div>
  );
};

export default Cardlist;
