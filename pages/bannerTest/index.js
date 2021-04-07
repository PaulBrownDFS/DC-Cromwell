/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Hidden, Typography, Grid } from '@material-ui/core';

import styles from './bannerTest.module.scss';

const BannerTest = () => {
  const [bannerTest, setBannerTest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: switch this to the visualisation URL when we have it.
    // const contentId = window.location.search.split('?content=')[1]; // get id from Params

    // Amplience Dynamic content Url
    // const url = `https://cdn.c1.amplience.net/cms/content/query?fullBodyObject=true&scope=tree&store=dfs&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/${contentId}%22%7D`;

    // static local api data (used during building content)
    const url = 'http://localhost:3000/api/bannerTest';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBannerTest(window.amp.inlineContent(data)[0]); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree
        setLoading(false);
        console.log(window.amp.inlineContent(data)[0]);
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
          <Grid
            container
            spacing={1}
            className={styles.dc_testBanner}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography variant="h6" color="primary">
                  {bannerTest._meta.name}
                </Typography>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  Extra Small Screen (0 - 374px)
                </Hidden>
                <Hidden only={['xs', 'md', 'lg', 'xl']}>
                  Small Screen (375px - 767px)
                </Hidden>
                <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                  Medium Screen (768px - 1399px)
                </Hidden>
                <Hidden only={['xs', 'sm', 'md', 'xl']}>
                  Large Screen (1400px - 1919px)
                </Hidden>
                <Hidden only={['xs', 'sm', 'md', 'lg']}>
                  Large Screen (1920px - upwards)
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default BannerTest;
