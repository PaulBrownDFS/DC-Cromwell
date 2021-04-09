import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MenuProps } from '@material-ui/core';

interface AnchorProps {
  anchorOrigin: {
    vertical: number;
    horizontal: 'number' | 'left' | 'center' | 'right';
  };
}

const menuProps: Partial<MenuProps> & AnchorProps = {
  anchorOrigin: {
    vertical: 40,
    horizontal: 'left',
  },
  getContentAnchorEl: null,
};

const themeProps = {
  MuiButton: {
    disableElevation: false,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiSelect: {
    autoWidth: false,
    IconComponent: KeyboardArrowDownIcon,
    MenuProps: menuProps,
  },
};

export default themeProps;
