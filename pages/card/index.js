/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Card from '../../src/components/card';
import { Box, Typography, Container } from '@material-ui/core';
import { getQueryParam } from '../../src/functions';

const SingleCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let contentId = getQueryParam('content');

    if (!contentId) {
      contentId = '82e2b459-f979-4400-8eaf-dfa9a7ade8ad'; // Fallback content id if none supplied
    }

    // Amplience Dynamic content Url DFSv2 URL
    const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/cardlist';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setLoading(false);
        console.log('data', data);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Card Ex Brands Preview | Dynamic Content Preview</title>
      </Head>
      {loading ? (
        <Box textAlign="center">
          <Typography variant="body2">
            Loading Content, please wait ..
          </Typography>
        </Box>
      ) : (
        <>
          <Container fixed maxWidth="xl">
            <Box id="fixedWidthWrapper" padding="20px">
              <Grid container justify="center" justify="center" spacing={1}>
                <Card card={card.content.cards[0]}></Card>
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </div>
  );
};

export default SingleCard;
