/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Typography, Container } from '@material-ui/core';
import Banner from '../../src/components/Banner';

import styles from './bannerTest.module.scss';

const BannerTest = () => {
  const [bannerTest, setBannerTest] = useState([]);
  const [loading, setLoading] = useState(true);

  const getId = (param) => {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == param) {
        return decodeURIComponent(pair[1]);
      }
    }
    return false;
  };

  useEffect(() => {
    // TODO: switch this to the visualisation URL when we have it.
    let contentId = getId('content');

    if (!contentId) {
      contentId = 'dae332d7-d196-4ea2-888d-eaa420c89dbb'; // Fallback content id if none supplied
    }

    console.log('ContentID:', contentId);

    // Amplience Dynamic content Url
    const url =
      'https://w59a4sqnbu301ot4nys8p4qo9.staging.bigcontent.io/content/id/' +
      contentId +
      '?depth=all&format=inlined';

    // static local api data (used during building content)
    // const url = 'http://localhost:3000/api/bannerTest';

    console.log('Content URL:', url);

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
