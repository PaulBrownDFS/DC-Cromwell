import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <Grid item sm={12} md={6} className={classes.dc_card}>
      <Box position="relative">
        <picture>
          {/* WEBP */}
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=671&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(min-width: 1400px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=588&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=356&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=332&fmt.jpeg.interlaced=true&fmt=webp`}
          />

          {/* JPG */}
          <source
            media="(min-width: 1920px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=671`}
          />
          <source
            media="(min-width: 1400px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=588`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=356`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=332`}
          />

          <img
            className="cardImage"
            src={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=671`}
            alt={card.cardImage.imageAltText}
          />
        </picture>
        {card.roundel && ( // conditional rendering based on data returned in reuqest
          <img
            className={`cardRoundel rdl_${card.roundel.roundelPosition}`}
            src={`https://images.dfs.co.uk/i/dfs/${card.roundel.roundel.name}?w=60`}
          />
        )}
      </Box>
      {card.cardHeading ? (
        <h3>{card.cardHeading}</h3>
      ) : (
        <Box m={2}>{/*spacer*/}</Box>
      )}

      {card.buttonType && (
        <Button variant="outlined" color="secondary" href={card.cardBtnLink}>
          {card.cardBtnText}
        </Button>
      )}
    </Grid>
  );
};

export default Card;
