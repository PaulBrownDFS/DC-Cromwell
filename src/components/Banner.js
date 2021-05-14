import React from 'react';
import { Box, Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  dc_testBanner: {
    height: '400px',
    width: '100%',
    minWidth: '322px',
    background: grey[300],
    '& h6': {
      color: theme.palette.primary.main,
    },
  },
}));
const Banner = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.dc_testBanner}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box textAlign="center">
          <h1>{content.headline}</h1>
          <Hidden only={['xs', 'md', 'lg', 'xl']}>
            Small Screen (375px - 767px) (Mobile 332px)
          </Hidden>
          <Hidden only={['xs', 'sm', 'lg', 'xl']}>
            Medium Screen (768px - 1399px) (Tablet 720px)
          </Hidden>
          <Hidden only={['xs', 'sm', 'md', 'xl']}>
            Large Screen (1400px - 1919px) (Desktop 1200px)
          </Hidden>
          <Hidden only={['xs', 'sm', 'md', 'lg']}>
            Large Screen (1920px - upwards) (Large Desktop 1366px)
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
