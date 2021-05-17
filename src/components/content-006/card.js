import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  c006_card: {
    paddingBottom: '40px !important',
    '& img.cardRoundel': {
      position: 'absolute',
    },
    '& .rdl_TopRight': {
      top: '15px',
      right: '15px',
    },
    '& .rdl_TopLeft': {
      top: '15px',
      left: '15px',
    },
    '& .rdl_BottomRight': {
      bottom: '15px',
      right: '15px',
    },
    '& .rdl_BottomLeft': {
      bottom: '15px',
      left: '15px',
    },
    '& img.cardImage_c006': {
      // fallback css image size for browsers that do not support <picture>
      [theme.breakpoints.up('sm')]: {
        width: '332px',
      },
      [theme.breakpoints.up('md')]: {
        width: '356px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '588px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '671px',
      },
    },
  },
}));
const Card = ({ card }) => {
  const classes = useStyles();
  const theme = useTheme();
  const seoText = card.cardImage.seoText ? `/${card.cardImage.seoText}` : '';
  const tt = card.cardImage.ttemplate ? `&\$${card.cardImage.ttemplate}\$` : '';
  const mbDiparams = card.cardImage.mbDiParams
    ? `&${card.cardImage.mbDiParams}`
    : '';
  const tbDiparams = card.cardImage.tbDiParams
    ? `&${card.cardImage.tbDiParams}`
    : '';
  const dskDiparams = card.cardImage.dskDiParams
    ? `&${card.cardImage.dskDiParams}`
    : '';
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid item sm={12} md={6} className={classes.c006_card}>
      <Box position="relative">
        <picture>
          {/* WEBP */}
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=671&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
          />
          <source
            type="image/webp"
            media="(min-width: 1400px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=588&fmt.jpeg.interlaced=true&fmt=webp${tt}${dskDiparams}`}
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=356&fmt.jpeg.interlaced=true&fmt=webp${tt}${tbDiparams}`}
          />
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=332&fmt.jpeg.interlaced=true&fmt=webp${tt}${mbDiparams}`}
          />

          {/* JPG */}
          <source
            media="(min-width: 1920px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=671${tt}`}
          />
          <source
            media="(min-width: 1400px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=588${tt}${dskDiparams}`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=356${tt}${tbDiparams}`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=332${tt}${mbDiparams}`}
          />

          <img
            className="cardImage_c006"
            src={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=671${tt}`}
            alt={card.cardImage.imageAltText || 'DFS content card image'}
          />
        </picture>
        {/* Roundel */}
        {card.roundel && ( // conditional rendering based on data returned in request
          <Box className="RoundelImg">
            <img
              className={`cardRoundel rdl_${card.roundel.roundelPosition}`}
              src={`https://dfs.a.bigcontent.io/v1/static/${card.roundel.roundel.name}`}
              width={mdDown ? `${card.roundel.roundelSize}%` : 'auto'}
            />
          </Box>
        )}
      </Box>
      {card.cardHeading ? (
        <h2>{card.cardHeading}</h2>
      ) : (
        <Box m={2}>{/*spacer*/}</Box>
      )}

      {card.buttonType && (
        <Button
          variant={card.buttonType}
          color={card.buttonColour}
          href={card.cardBtnLink}
        >
          {card.cardBtnText}
        </Button>
      )}
    </Grid>
  );
};

export default Card;
