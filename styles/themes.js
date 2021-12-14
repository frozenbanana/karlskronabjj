// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}


const textStyles =  {
  h1: {
    fontSize: '5rem',
    fontWeight: "950",
    lineHeight: "110%",
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: '4rem',
    fontWeight: "900",
    lineHeight: "110%",
    textTransform: 'uppercase',
    marginBottom: '16px'
  },
  p: {
    fontSize: "2.0rem",
    fontWeight: "800",
    lineHeight: "100%",
    letterSpacing: "-0.1rem",
    textTransform: 'uppercase',
    marginTop: '10px'
  },
  a: {
    fontSize: "2.0rem",
    fontWeight: "700",
    lineHeight: "130%",
    letterSpacing: "0.1rem",
    textTransform: 'uppercase',
    transition: '0.5s'
  },
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, textStyles })


export default extendTheme(theme);
