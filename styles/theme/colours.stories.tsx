import React from 'react';
import dfsTheme from './';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { colour } from './config';

export default {
  title: 'DFS/Theme/Colours',
};

export const Primary = () => {
  return (
    <ThemeProvider theme={dfsTheme}>
      <CssBaseline />
      <div>
        {Object.keys(colour).map((key) => (
          <div
            style={{
              display: 'inline-block',
              width: '200px',
              marginRight: '20px',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                backgroundColor: colour[key],
                width: '120px',
                height: '140px',
                borderRadius: '25px',
                border: '1px solid #DEDEDE',
              }}
            />
            <div>{key}</div>
            <div>{colour[key]}</div>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};

Primary.storyName = 'Colours';
