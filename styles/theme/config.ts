export const inputHeight = 45;
export const inputLabelFontSize = 14;
export const inputFontSize = 14;
export const fontFamily: string = ['Poppins', 'sans-serif'].join(',');

export const colour: Colour = {
  primary: '#2D0048', // purple
  primaryDisabled: '#281048',
  primaryHover: '#2E0048', // dark purple
  secondary: '#B4006D', // pink
  secondaryHover: '#9D005F', // dark pink
  tertiary: '#EFECF3', // light purple
  canvas: '#FFFFFF', // white
  canvasInverse: '#000000', // black
  promo: '#FFCF4E', // yellow
  error: '#C10909', // red
  copy: '#554B62', // Grey
  outline: '#D9D9D9', // dim purple
  defaultPrimary: '#DEDEDE', // Grey
  defaultSecondary: '#C4C4C4', // mid grey
  defaultTertiary: '#F1F1F1', // light grey
  anotherGrey: '#939295', // another light grey
  disabled: 'white',
  textDisabled: 'lightgrey',
  buttonDisabled: '#8D7498',
  mobileNavBorder: '#C1C1C1',
};

export const megaNav = {
  lineHeight: '50px',
  mobieMegaNavWidth: '90%',
};

export const padding = {
  //Padding
  sm: '5px',
  md: '10px',
  lg: '15px',
  xl: '20px',
};

export const defaultValues = {
  iconHeight: '20px',
  iconWidth: '20px',
  iconHeightLg: '50px',
  iconWidthLg: '50px',
  fontsizeXs: '12px',
  fontsizeSm: '14px',
  fontsizeMd: '16px',
};

export const margin = {
  //Margins
  sm: '5px',
  md: '10px',
  lg: '15px',
  xl: '20px',
};

interface Colour {
  primary: string;
  primaryHover: string;
  primaryDisabled: string;
  secondary: string;
  secondaryHover: string;
  tertiary: string;
  canvas: string;
  canvasInverse: string;
  promo: string;
  error: string;
  copy: string;
  outline: string;
  defaultPrimary: string;
  defaultSecondary: string;
  defaultTertiary: string;
  anotherGrey: string;
  disabled: string;
  textDisabled: string;
  buttonDisabled: string;
  mobileNavBorder: string;
}

export const buttonCommon = {
  buttonPadding: {
    desktop: '10px 50px',
    mobile: '10px 40px',
  },
  buttonPaddingBordered: {
    desktop: '8px 50px',
    mobile: '8px 40px',
  },
  borderShadow: '0px 3px 6px #00000026',
  borderShadowHover: '0px 3px 6px #00000033',
};
