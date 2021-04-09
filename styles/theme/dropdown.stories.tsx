import React from 'react';
import {
  Box,
  Grid,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
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
  formControl: {
    padding: 0,
  },
}));

const DropdownStory: React.FC<unkown> = () => {
  const classes = useStyles();
  const noop = () => {
    /**no op */
  };

  return (
    <Box display="flex" justifyContent="center">
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Typography variant="h6">Drop-downs</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth>
              <InputLabel id="default-select">Default select</InputLabel>
              <Select
                labelId="default-select"
                name="default-select"
                value={'20'}
                onChange={noop}
                displayEmpty
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth focused>
              <InputLabel id="active-select">Focused active select</InputLabel>
              <Select
                labelId="active-select"
                name="active-select"
                value={'20'}
                onChange={noop}
                displayEmpty
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth disabled>
              <InputLabel id="disable-select">Disabled select</InputLabel>
              <Select
                labelId="disable-select"
                name="disable-select"
                value={''}
                onChange={noop}
                displayEmpty
              >
                <MenuItem value="">Please select a value</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth error>
              <InputLabel id="error-select">Error select</InputLabel>
              <Select
                labelId="error-select"
                name="error-select"
                value={'20'}
                onChange={noop}
                displayEmpty
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Some helper text</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth>
              <Select
                name="default-no-label-select"
                value={'20'}
                onChange={noop}
                inputProps={{
                  'aria-label': 'default no label select',
                }}
                displayEmpty
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} variant="outlined">
            <FormControl fullWidth dense>
              <Select
                name="default-no-label-with-image-select"
                value={'10'}
                onChange={noop}
                inputProps={{
                  'aria-label': 'default no label with image select',
                }}
                displayEmpty
              >
                <MenuItem value={10}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt="great britain"
                      src="https://www.countryflags.io/ie/flat/32.png"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="desciption 1" />
                </MenuItem>
                <MenuItem value={10}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt="great britain"
                      src="https://www.countryflags.io/nl/flat/32.png"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="desciption 1" />
                </MenuItem>
                <MenuItem value={10}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt="great britain"
                      src="https://www.countryflags.io/gb/flat/32.png"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="desciption 1" />
                </MenuItem>
                <MenuItem value={20}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt="great britain"
                      src="https://www.countryflags.io/es/flat/32.png"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="desciption 1" />
                </MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default {
  title: 'DFS/Theme/Forms/Dropdown',
  decorators: [muiTheme],
};

export const Primary: React.FC<unkown> = () => {
  return <DropdownStory />;
};

Primary.storyName = 'Dropdown';
