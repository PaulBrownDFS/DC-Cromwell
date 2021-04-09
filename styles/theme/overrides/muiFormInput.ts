import Colour from 'color';
import { inputLabelFontSize, inputFontSize, inputHeight } from '../config.ts';

const muiFormInput = (theme) => ({
  MuiFormLabel: {
    root: {
      fontSize: inputLabelFontSize,
      fontWeight: 500,
      color: theme.palette.primary.main,
      '&$disabled': {
        color: `${Colour(theme.palette.primary.main).alpha(0.5)}`,
      },
    },
  },
  MuiInput: {
    root: {
      top: theme.spacing(0.5),
      height: inputHeight,
      border: `1px solid ${theme.palette.outline.main}`,
      color: theme.palette.copy.main,
      fontSize: inputFontSize,
      borderRadius: 4,
      '&$focused': {
        border: `1px solid ${theme.palette.copy.main}`,
      },
      '&:hover:not($disabled)': {
        border: `1px solid ${theme.palette.copy.main}`,
      },
      '&$disabled': {
        backgroundColor: theme.palette.defaultTertiary.main,
        color: `${Colour(theme.palette.copy.main).alpha(0.5)}`,
      },
      '&.Mui-error': {
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
    input: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      '&::placeholder': {
        color: `${Colour(theme.palette.copy.main).alpha(0.5)}`,
      },
    },
  },
  MuiInputAdornment: {
    root: {
      '&.MuiInputAdornment-positionEnd > button': {
        height: inputHeight + 1,
        marginRight: -8,
      },
    },
  },
  MuiFormHelperText: {
    root: {
      fontSize: 12,
      marginTop: theme.spacing(0.5),
    },
  },
});

export default muiFormInput;
