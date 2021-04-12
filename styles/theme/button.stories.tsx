import React from 'react';
import { colour } from './config.ts';
import {
  Button,
  IconButton,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import muiTheme from './themeDecorator.tsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ButtonStory = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Primary Button Light Background</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="contained" color="primary">
              Button
            </Button>
          </span>
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="contained" color="primary" disabled>
              Disabled
            </Button>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Primary Button Dark Background</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span
            style={{
              padding: 10,
              background: colour.primary,
              display: 'inline-block',
            }}
          >
            <Button variant="outlined" color="primary">
              Button
            </Button>
          </span>
          <span
            style={{
              padding: 10,
              background: colour.primary,
              display: 'inline-block',
            }}
          >
            <Button variant="outlined" color="primary" disabled>
              Disabled
            </Button>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Secondary Button Light Background</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="outlined" color="secondary">
              Button
            </Button>
          </span>
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="outlined" color="secondary" disabled>
              Disabled
            </Button>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Secondary Button Dark Background</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span
            style={{
              padding: 10,
              background: colour.primary,
              display: 'inline-block',
            }}
          >
            <Button variant="contained" color="secondary">
              Button
            </Button>
          </span>
          <span
            style={{
              padding: 10,
              background: colour.primary,
              display: 'inline-block',
            }}
          >
            <Button variant="contained" color="secondary" disabled>
              Disabled
            </Button>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Tertiary Button (Default Button)</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="contained" color="default">
              Button
            </Button>
          </span>
          <span style={{ padding: 10, display: 'inline-block' }}>
            <Button variant="contained" color="default" disabled>
              Disabled
            </Button>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Icon Button (Default Button)</Typography>
        <Paper className={classes.paper} variant="outlined">
          <span style={{ padding: 10, display: 'inline-block' }}>
            <IconButton color="primary">
              <AddShoppingCartIcon /> Button
            </IconButton>
          </span>
          <span style={{ padding: 10, display: 'inline-block' }}>
            <IconButton color="primary" disabled>
              <AddShoppingCartIcon /> Disabled
            </IconButton>
          </span>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <a href="https://material-ui.com/api/button/" target="_blank">
            Link to Button component API usage
          </a>
          <br />
          <a href="https://material-ui.com/api/icon-button/" target="_blank">
            Link to IconButton component API usage
          </a>
          <br />
          <a href="https://material-ui.com/components/buttons/" target="_blank">
            Link to component implementation
          </a>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default {
  title: 'DFS/Theme/Forms',
  decorators: [muiTheme],
};

export const Primary = () => {
  return <ButtonStory />;
};

Primary.storyName = 'Buttons';
