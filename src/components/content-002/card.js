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
  c002_card: {
    '& h5': {
      marginTop: '8px',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& img.cardImage_c002': {
      // fallback css image size for browsers that do not support <picture>
      [theme.breakpoints.up('sm')]: {
        width: '162px',
      },
      [theme.breakpoints.up('md')]: {
        width: '174px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '282px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '322px',
      },
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
    <Grid item sm={6} md={3} className={classes.c002_card}>
      {card.cardBtnLink && (
        <a href={card.cardBtnLink}>
          <Box position="relative">
            <picture>
              {/* WEBP */}
              <source
                type="image/webp"
                media="(min-width: 1920px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=322&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
              />
              <source
                type="image/webp"
                media="(min-width: 1400px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=282&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
              />
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=174&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
              />
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=162&fmt.jpeg.interlaced=true&fmt=webp${tt}`}
              />

              {/* JPG */}
              <source
                media="(min-width: 1920px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=322${tt}`}
              />
              <source
                media="(min-width: 1400px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=282${tt}`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=174${tt}`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=162${tt}`}
              />
              <img
                className="cardImage_c002"
                src={`https://images.dfs.co.uk/i/dfs/${card.cardImage.image.name}${seoText}?w=322${tt}`}
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
        </a>
      )}
    </Grid>
  );
};

export default Card;
