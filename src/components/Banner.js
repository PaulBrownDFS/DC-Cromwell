import React from 'react';
import { Box, Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  dc_testBanner: {
    height: '400px',
    width: '100%',
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
          <Typography variant="h6" color="primary">
            {content.headline}
          </Typography>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            Extra Small Screen (0 - 374px)
          </Hidden>
          <Hidden only={['xs', 'md', 'lg', 'xl']}>
            Small Screen (375px - 767px) (Mobile 322px)
          </Hidden>
          <Hidden only={['xs', 'sm', 'lg', 'xl']}>
            Medium Screen (768px - 1399px) (Tablet 696px)
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
