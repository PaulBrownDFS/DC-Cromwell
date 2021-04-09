import { inputLabelFontSize } from '../config.ts';
import { Theme } from '@material-ui/core';

const muiIconButton = (theme: Theme) => ({
  MuiIconButton: {
    root: {
      fontSize: inputLabelFontSize,
      textTransform: 'capitalize',
      borderRadius: theme.shape.borderRadius,

      '& .MuiIconButton-label': {
        flexDirection: 'column',
      },

      [theme.breakpoints.up('lg')]: {
        '& .MuiIconButton-label': {
          flexDirection: 'row',
        },
      },
    },
  },
});

export default muiIconButton;
