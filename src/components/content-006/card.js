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
  dc_card: {
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
  },
}));
const Card = ({ card }) => {
  const classes = useStyles();
  const theme = useTheme();
  const seoText = card.cardImage.seoText ? `/${card.cardImage.seoText}` : '';
  const tt = card.cardImage.ttemplate ? `&\$${card.cardImage.ttemplate}\$` : '';
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid item sm={12} md={6} className={classes.dc_card}>
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
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=588&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=356&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
          />
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=332&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
          />

          {/* JPG */}
          <source
            media="(min-width: 1920px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=671${tt}`}
          />
          <source
            media="(min-width: 1400px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=588${tt}`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=356${tt}`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=332${tt}`}
          />

          <img
            className="cardImage"
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
        <h3>{card.cardHeading}</h3>
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
