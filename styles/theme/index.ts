import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
} from '@material-ui/core/styles';
import palette from './palette.ts';
import componentProps from './props.ts';
import { fontFamily } from './config.ts';
import getOverrides from './overrides/index.ts';

// Create a theme instance.
const theme: Theme = createMuiTheme({
  palette,
  breakpoints: {
    values: {
      sm: 375,
      md: 768,
      lg: 1400,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
    },
    fontFamily,
    fontSize: 16,
  },
  shape: {
    borderRadius: 4,
  },
});

theme.props = componentProps;

theme.overrides = getOverrides(theme);
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    promo: Palette['primary'];
    tertiary: Palette['primary'];
    canvas: Palette['primary'];
    canvasInverse: Palette['primary'];
    copy: Palette['primary'];
    outline: Palette['primary'];
    defaultPrimary: Palette['primary'];
    defaultSecondary: Palette['primary'];
    primaryHover: Palette['primary'];
    defaultTertiary: Palette['primary'];
    secondaryHover: Palette['primary'];
    primaryDisabled: Palette['primary'];
    buttonDisabled: Palette['primary'];
    mobileNavBorder: Palette['primary'];
  }
  interface PaletteOptions {
    promo: PaletteOptions['primary'];
    tertiary: PaletteOptions['primary'];
    canvas: PaletteOptions['primary'];
    canvasInverse: PaletteOptions['primary'];
    copy: PaletteOptions['primary'];
    outline: PaletteOptions['primary'];
    defaultPrimary: PaletteOptions['primary'];
    defaultSecondary: PaletteOptions['primary'];
    primaryHover: PaletteOptions['primary'];
    defaultTertiary: PaletteOptions['primary'];
    secondaryHover: PaletteOptions['primary'];
    primaryDisabled: PaletteOptions['primary'];
    buttonDisabled: PaletteOptions['primary'];
    mobileNavBorder: PaletteOptions['primary'];
  }
}

export default responsiveFontSizes(theme);
