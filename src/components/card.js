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
          <source
            type="image/webp"
            media="(max-width: 768px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=322&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(max-width: 1400px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=344&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(max-width: 1920px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=596&fmt.jpeg.interlaced=true&fmt=webp`}
          />
          <source
            type="image/webp"
            media="(min-width: 1921px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=679&fmt.jpeg.interlaced=true&fmt=webp`}
          />

          <source
            type="image/webp"
            media="(max-width: 768px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=322`}
          />
          <source
            type="image/webp"
            media="(max-width: 1400px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=344`}
          />
          <source
            type="image/webp"
            media="(max-width: 1920px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=596`}
          />
          <source
            type="image/webp"
            media="(min-width: 1921px)"
            srcset={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=679`}
          />
          <img
            className="cardImage"
            src={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}?w=679`}
            alt={card.cardImage.imageAltText}
          />
        </picture>
        {card.roundel ? (
          <img
            className={`cardRoundel rdl_${card.roundel.roundelPosition}`}
            src={`https://images.dfs.co.uk/i/dfs/${card.roundel.roundel.name}?w=60`}
          />
        ) : (
          <Box className="NoRoundel"></Box>
        )}
      </Box>
      <h3>{card.cardHeading}</h3>
      <Button variant="outlined" color="secondary">
        {card.cardBtnText}
      </Button>
    </Grid>
  );
};

export default Card;
