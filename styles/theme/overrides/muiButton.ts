import { buttonCommon, inputLabelFontSize } from '../config.ts';
import { Theme } from '@material-ui/core';

const muiButton = (theme: Theme) => ({
  MuiButton: {
    root: {
      fontSize: inputLabelFontSize,
      textTransform: 'capitalize',
      [theme.breakpoints.up('md')]: {
        padding: buttonCommon.buttonPadding.desktop,
      },
      padding: buttonCommon.buttonPadding.mobile,
      minWidth: 0,
      boxSizing: 'border-box',
    },
    containedPrimary: {
      color: theme.palette.canvas.main,
      backgroundColor: theme.palette.primary.main,
      boxShadow: buttonCommon.borderShadow,
      '&:hover': { boxShadow: buttonCommon.borderShadowHover },
      '&:disabled': {
        backgroundColor: theme.palette.buttonDisabled.main,
        color: theme.palette.canvas.main,
        opacity: 1,
      },
    },
    outlinedPrimary: {
      backgroundColor: 'transparent',
      color: theme.palette.canvas.main,
      borderColor: theme.palette.canvas.main,
      boxShadow: buttonCommon.borderShadow,
      [theme.breakpoints.up('md')]: {
        padding: buttonCommon.buttonPaddingBordered.desktop,
      },
      padding: buttonCommon.buttonPaddingBordered.mobile,
      '&:hover': {
        boxShadow: buttonCommon.borderShadowHover,
        border: 'solid 1px',
      },
      '&:disabled': {
        color: theme.palette.buttonDisabled.main,
        borderColor: theme.palette.buttonDisabled.main,
      },
    },
    outlinedSecondary: {
      backgroundColor: theme.palette.canvas.main,
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      boxShadow: buttonCommon.borderShadow,
      [theme.breakpoints.up('md')]: {
        padding: buttonCommon.buttonPaddingBordered.desktop,
      },
      padding: buttonCommon.buttonPaddingBordered.mobile,
      '&:hover': {
        backgroundColor: theme.palette.canvas.main,
        borderColor: theme.palette.primary.main,
        boxShadow: buttonCommon.borderShadowHover,
      },
      '&:disabled': {
        backgroundColor: theme.palette.canvas.main,
        color: theme.palette.buttonDisabled.main,
        borderColor: theme.palette.buttonDisabled.main,
        boxShadow: 'none',
      },
    },
    containedSecondary: {
      backgroundColor: theme.palette.canvas.main,
      color: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        padding: buttonCommon.buttonPadding.desktop,
      },
      padding: buttonCommon.buttonPadding.mobile,
      '&:hover': {
        backgroundColor: theme.palette.canvas.main,
      },
      '&:disabled': {
        color: theme.palette.primary.main,
        background: theme.palette.buttonDisabled.main,
        opacity: 1,
      },
    },
    contained: {
      color: theme.palette.canvas.main,
      boxShadow: buttonCommon.borderShadow,
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.up('md')]: {
        padding: buttonCommon.buttonPadding.desktop,
      },
      padding: buttonCommon.buttonPadding.mobile,
      '&:hover': {
        boxShadow: buttonCommon.borderShadowHover,
        backgroundColor: theme.palette.secondaryHover.main,
      },
      '&:disabled': {
        color: theme.palette.canvas.main,
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.4,
      },
    },
  },
});

export default muiButton;
