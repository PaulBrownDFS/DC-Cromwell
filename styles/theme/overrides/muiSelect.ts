import { inputFontSize } from '../config.ts';

const muiSelect = (theme) => ({
  MuiSelect: {
    root: {
      textAlign: 'left',
      fontSize: inputFontSize,
    },
  },
  MuiMenuItem: {
    root: {
      [theme.breakpoints.between('xs', 'xl')]: {
        fontSize: inputFontSize,
      },
      color: theme.palette.copy.main,
      '&::hover': {
        backgroundColor: theme.palette.defaultTertiary.main,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.defaultTertiary.main,
      },
    },
  },
  MuiListItemAvatar: {
    root: {
      minWidth: theme.spacing(4.5),
    },
  },
  MuiListItemText: {
    root: {
      '& .MuiTypography-root': {
        fontSize: inputFontSize,
      },
    },
  },
  MuiAvatar: {
    square: {
      width: 28,
      height: 'auto',
    },
  },
});

export default muiSelect;
