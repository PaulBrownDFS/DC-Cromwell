import { makeStyles } from '@material-ui/core/styles';

import { colour } from './config.ts';

export const globalStyles = {
  inverse: {
    backgroundColor: colour.primary,
    color: colour.canvas,
  },
  carouselPrice: {
    fontSize: 16,
    lineHeight: '25px',
    color: colour.secondary,
    fontWeight: 600,
  },
  carouselPriceStrikethrough: {
    fontSize: 16,
    lineHeight: '25px',
    color: colour.anotherGrey,
    textDecoration: 'line-through',
    fontWeight: 600,
  },
  copyLarge: {
    fontSize: 16,
    lineHeight: '25px',
  },
  copySmall: {
    fontSize: 12,
    lineHeight: '20px',
  },
  copyExtraSmall: {
    fontSize: 10,
    lineHeight: '15px',
  },
};

export const useGlobalStyles = makeStyles(globalStyles);

export default useGlobalStyles;
