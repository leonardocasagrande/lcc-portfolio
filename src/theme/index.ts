import { createTheme } from '@material-ui/core';
import palette from './palette';
import props from './props';
import typography from "./typography";

const theme = createTheme({
  typography: typography(),
  palette: palette(),
  props: props()
})


export { theme };