import { Theme } from '@material-ui/core';
import muiCssBaseline from './muiCssBaseline.ts';
import muiFormInput from './muiFormInput.ts';
import muiSelect from './muiSelect.ts';
import muiButton from './muiButton.ts';
import muiIconButton from './muiIconButton.ts';

const getOverrides = (theme: Theme) =>
  Object.assign(
    {},
    muiCssBaseline(theme),
    muiFormInput(theme),
    muiSelect(theme),
    muiButton(theme),
    muiIconButton(theme)
  );

export default getOverrides;
