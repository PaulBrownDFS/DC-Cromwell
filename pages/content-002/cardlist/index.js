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
      contentId = 'aa46ce0c-4eb3-4296-b35b-0d6eb57db8bf'; // Fallback content id if none supplied
    }

    // Amplience Dynamic content DFSv2 Staging URL
    const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/content-002/cardlist';

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
                {cardlist.content.cards.map((card, index) => (
                  <Card card={card} key={`card${index}`}></Card>
                ))}
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </div>
  );
};

export default Cardlist;
