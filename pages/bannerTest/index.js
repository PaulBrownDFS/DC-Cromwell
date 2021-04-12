/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Typography, Container } from '@material-ui/core';
import Banner from '../../src/components/Banner';

import styles from './bannerTest.module.scss';

const BannerTest = () => {
  const [bannerTest, setBannerTest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: switch this to the visualisation URL when we have it.
    let contentId = window.location.search.split('content=')[1]; // get id from Params (TODO: to be refinded at a later date)

    if (!contentId) {
      contentId = 'dae332d7-d196-4ea2-888d-eaa420c89dbb'; // Fallback content id if none supplied
    }

    // Amplience Dynamic content Url
    const url =
      'https://w59a4sqnbu301ot4nys8p4qo9.staging.bigcontent.io/content/id/dae332d7-d196-4ea2-888d-eaa420c89dbb?depth=all&format=inlined';

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/bannerTest';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBannerTest(data); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.dc_bannerTest_v1}>
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
          <Container fixed>
            <Box id="fixedWidthWrapper">
              <Banner bannerTest={bannerTest.content} />
            </Box>
          </Container>
        </div>
      )}
    </div>
  );
};

export default BannerTest;
