import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import "typeface-open-sans";

const typography = (): TypographyOptions => ({
  fontFamily: "\"Open Sans\", \"Trebuchet MS\", Helvetica, sans-serif",
  h1: {
    fontSize: '3rem',
    fontWeight: 800
  },
  h2: {
    fontSize: '1.5rem',
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700
  },
  body1: {
    fontSize: '1.25rem',
    lineHeight: '1.5'
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 300
  }
})

export default typography;