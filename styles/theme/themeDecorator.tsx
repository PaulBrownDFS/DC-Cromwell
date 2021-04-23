import * as React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { select } from '@storybook/addon-knobs';
import dfsTheme from './index.ts';

interface Props {
  Story: JSX.Element;
}

const ThemeDecoractor: React.FC<Props> = (Story) => {
  const themes = { Default: createMuiTheme({}), DFS: dfsTheme };
  const themeNames = Object.keys(themes);
  const theme = select('Theme', themeNames, themeNames[1], 'Themes');

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export default ThemeDecoractor;
