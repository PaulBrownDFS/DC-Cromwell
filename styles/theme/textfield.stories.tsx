import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Paper,
  makeStyles,
} from '@material-ui/core';
import muiTheme from '@dfs/component-library/styles/theme/themeDecorator';

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

const TextFieldStory: React.FC<unkown> = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="h6">Input Fields</Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <TextField
            fullWidth
            name="active-input"
            label="Default input field"
            placeholder="Enter some text"
            inputProps={{
              inputmode: 'text',
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <TextField
            fullWidth
            focused
            name="focused-input"
            label="Focused input field"
            placeholder="Enter some text"
            inputProps={{
              inputmode: 'text',
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <TextField
            fullWidth
            error
            name="error-input"
            label="Error input field"
            helperText="Some hepler text"
            defaultValue="incorrect value..."
            placeholder="Enter some text"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <TextField
            disabled
            fullWidth
            name="disabled-input"
            label="Disabled input field"
            placeholder="Enter some text"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper} variant="outlined">
          <TextField
            fullWidth
            name="adornment-input"
            placeholder="Adornment input field"
            InputProps={{
              'aria-label': 'adornment input field',
              endAdornment: (
                <InputAdornment position="end" variant="filled">
                  <Button variant="contained" color="primary">
                    search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default {
  title: 'DFS/Theme/Forms/TextField',
  decorators: [muiTheme],
};

export const Primary: React.FC<unkown> = () => {
  return <TextFieldStory />;
};

Primary.storyName = 'TextField';
