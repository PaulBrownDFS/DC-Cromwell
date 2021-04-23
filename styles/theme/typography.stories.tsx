import React from 'react';
import { Container, Box, makeStyles, createStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useGlobalStyles, {
  globalStyles as rawGlobalStyles,
} from './globalStyles.ts';
import { fontFamily, colour } from './config.ts';
import muiTheme from './themeDecorator.tsx';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& pre': {
        whiteSpace: 'pre-wrap',
      },
    },
    contrastContainer: {
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius,
    },
  })
);

const TypographyStory = () => {
  const theme = useTheme();
  const classes = useStyles();
  const globalStyles = useGlobalStyles();
  const overrideValues = theme?.overrides?.MuiCssBaseline?.['@global'];
  const visualSize = { fontSize: '35px' };

  return (
    <Container maxWidth="md" className={classes.root}>
      <div style={{ display: 'inline-block', fontFamily: fontFamily }}>
        <div
          style={{
            display: 'inline-block',
            marginRight: '20px',
            fontWeight: 500,
          }}
        >
          <div style={visualSize}>Aa</div>
          <div>Poppins Semi-bold</div>
        </div>
        <div
          style={{
            display: 'inline-block',
            marginRight: '20px',
            fontWeight: 400,
          }}
        >
          <div style={visualSize}>Aa</div>
          <div>Poppins Medium</div>
        </div>
        <div style={{ display: 'inline-block', fontWeight: 300 }}>
          <div style={visualSize}>Aa</div>
          <div>Poppins Regular</div>
        </div>
      </div>
      <h1>Heading 1</h1>
      <pre>{JSON.stringify(overrideValues?.h1)}</pre>
      <hr />
      <h2>Heading 2</h2>
      <pre>{JSON.stringify(overrideValues?.h2)}</pre>
      <hr />
      <h3>Heading 3</h3>
      <pre>{JSON.stringify(overrideValues?.h3)}</pre>
      <hr />
      <h4>Heading 4</h4>
      <pre>{JSON.stringify(overrideValues?.h4)}</pre>
      <hr />
      <h5>Heading 5</h5>
      <pre>{JSON.stringify(overrideValues?.h5)}</pre>
      <hr />
      <h6>Heading 6</h6>
      <pre>{JSON.stringify(overrideValues?.h6)}</pre>
      <hr />
      <div className={globalStyles.copyLarge}>Body Copy Large</div>
      <pre>{JSON.stringify(rawGlobalStyles.copyLarge)}</pre>
      <hr />
      <div>Body Copy Regular</div>
      <hr />
      <div className={globalStyles.copySmall}>Body Copy Small</div>
      <pre>{JSON.stringify(rawGlobalStyles.copySmall)}</pre>
      <hr />
      <div className={globalStyles.copyExtraSmall}>Body Copy Extra Small</div>
      <pre>{JSON.stringify(rawGlobalStyles.copyExtraSmall)}</pre>
      <hr />
      <div className={globalStyles.carouselPrice}>Carousel Product Price</div>
      <pre>{JSON.stringify(rawGlobalStyles.carouselPrice)}</pre>
      <hr />
      <div className={globalStyles.carouselPriceStrikethrough}>
        Carousel Product Price
      </div>
      <pre display="flex" flexWrap="wrap">
        {JSON.stringify(rawGlobalStyles.carouselPriceStrikethrough)}
      </pre>

      <Box
        className={`${globalStyles.inverse} ${classes.contrastContainer}`}
        p={6}
      >
        <div style={{ display: 'inline-block', fontFamily: fontFamily }}>
          <div
            style={{
              display: 'inline-block',
              marginRight: '20px',
              fontWeight: 500,
            }}
          >
            <div style={visualSize}>Aa</div>
            <div>Poppins Semi-bold</div>
          </div>
          <div
            style={{
              display: 'inline-block',
              marginRight: '20px',
              fontWeight: 400,
            }}
          >
            <div style={visualSize}>Aa</div>
            <div>Poppins Medium</div>
          </div>
          <div style={{ display: 'inline-block', fontWeight: 300 }}>
            <div style={visualSize}>Aa</div>
            <div>Poppins Regular</div>
          </div>
        </div>
        <h1 style={{ color: colour.canvas }}>Heading 1</h1>
        <pre>
          {JSON.stringify({ ...overrideValues?.h1, color: colour.canvas })}
        </pre>
        <hr />
        <h2 style={{ color: colour.canvas }}>Heading 2</h2>
        <pre>
          {JSON.stringify({ ...overrideValues?.h2, color: colour.canvas })}
        </pre>
        <hr />
        <h3 style={{ color: colour.canvas }}>Heading 3</h3>
        <pre>
          {JSON.stringify({ ...overrideValues?.h3, color: colour.canvas })}
        </pre>
        <hr />
        <h4 style={{ color: colour.canvas }}>Heading 4</h4>
        <pre>
          {JSON.stringify({ ...overrideValues?.h4, color: colour.canvas })}
        </pre>
        <hr />
        <h5 style={{ color: colour.canvas }}>Heading 5</h5>
        <pre>
          {JSON.stringify({ ...overrideValues?.h5, color: colour.canvas })}
        </pre>
        <hr />
        <h6 style={{ color: colour.canvas }}>Heading 6</h6>
        <pre>
          {JSON.stringify({ ...overrideValues?.h6, color: colour.canvas })}
        </pre>
        <hr />
        <div className={globalStyles.copyLarge}>Body Copy Large</div>
        <pre>{JSON.stringify(rawGlobalStyles.copyLarge)}</pre>
        <hr />
        <div>Body Copy Regluar</div>
        <hr />
        <div className={globalStyles.copySmall}>Body Copy Small</div>
        <pre>{JSON.stringify(rawGlobalStyles.copySmall)}</pre>
        <hr />
        <div className={globalStyles.copyExtraSmall}>Body Copy Extra Small</div>
        <pre>{JSON.stringify(rawGlobalStyles.copyExtraSmall)}</pre>
      </Box>
    </Container>
  );
};

export default {
  title: 'DFS/Theme/Typography',
  decorators: [muiTheme],
};

export const Primary = () => {
  return <TypographyStory />;
};

Primary.storyName = 'Typography';
