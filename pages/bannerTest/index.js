/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '../../src/components/Banner';
import { Box, Typography, Container } from '@material-ui/core';
import { getQueryParam } from '../../src/functions';

const BannerTest = () => {
  const [bannerTest, setBannerTest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let contentId = getQueryParam('content');

    if (!contentId) {
      contentId = 'be531b98-e742-4e57-901c-125b88313dfa'; // Fallback content id if none supplied
    }

    // Amplience Dynamic content Url
    const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/bannerTest';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBannerTest(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Banner Test Preview | Dynamic Content Preview</title>
      </Head>
      {loading ? (
        <Box textAlign="center">
          <Typography variant="body2">
            Loading Content, please wait ..
          </Typography>
        </Box>
      ) : (
        <div>
          <Container fixed maxWidth="xl" disableGutters={true}>
            <Box id="fixedWidthWrapper">
              <Banner content={bannerTest.content} />
            </Box>
          </Container>
        </div>
      )}
    </div>
  );
};

export default BannerTest;
