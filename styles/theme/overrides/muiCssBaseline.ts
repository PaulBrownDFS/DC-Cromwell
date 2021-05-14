import { fontFamily } from '../config.ts';

const muiCssBaseline = (theme) => ({
  MuiCssBaseline: {
    '@global': {
      body: {
        fontFamily,
        fontSize: 14,
        lineHeight: '25px',
        fontWeight: 400,
        color: theme.palette.copy.main,
      },
      hr: {
        border: 'none',
        backgroundColor: theme.palette.defaultTertiary.main,
        height: 1,
      },
      h1: {
        fontSize: 26,
        [theme.breakpoints.down('md')]: {
          fontSize: 22,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 18,
        },
        fontWeight: 500,
        lineHeight: '34px',
        color: theme.palette.primary.main,
      },
      h2: {
        fontSize: 22,
        [theme.breakpoints.down('md')]: {
          fontSize: 18,
        },
        fontWeight: 500,
        lineHeight: '30px',
        color: theme.palette.primary.main,
      },
      h3: {
        fontSize: 18,
        [theme.breakpoints.down('md')]: {
          fontSize: 16,
        },

        fontWeight: 500,
        lineHeight: '25px',
        color: theme.palette.primary.main,
      },
      h4: {
        fontSize: 16,
        [theme.breakpoints.down('md')]: {
          fontSize: 14,
        },
        fontWeight: 500,
        lineHeight: '25px',
        color: theme.palette.primary.main,
      },
      h5: {
        fontSize: 14,
        [theme.breakpoints.down('md')]: {
          fontSize: 12,
        },
        fontWeight: 500,
        lineHeight: '25px',
        color: theme.palette.primary.main,
      },
      h6: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '18px',
        color: theme.palette.primary.main,
      },
    },
  },
});

export default muiCssBaseline;
