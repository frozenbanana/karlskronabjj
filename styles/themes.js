// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

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
    fontSize: ['2.2rem', '3rem', '5rem'],
    fontWeight: "950",
    lineHeight: "110%",
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: ['2.0rem', '2.7rem', '4rem'],
    fontWeight: "900",
    lineHeight: "110%",
    textTransform: 'uppercase',
    marginBottom: '16px'
  },
  h3: {
    fontSize: ['1.7rem', '2.3rem', '2.6rem'],
    fontWeight: "900",
    lineHeight: "110%",
    textTransform: 'uppercase',
    marginBottom: '16px'
  },
  subhead: {
    fontSize: ['1.2rem', '1.7rem', '2.0rem'],
    fontWeight: "800",
    lineHeight: "100%",
    letterSpacing: "-0.1rem",
    textTransform: 'uppercase',
    marginTop: '10px'
  },
  p: {
    fontSize: ['1.2rem', '1.7rem', '2.0rem'],
    fontWeight: "500",
    lineHeight: "100%",
    marginTop: '10px'
  },
  a: {
    fontSize: ['1.2rem', '1.7rem', '2.0rem'],
    lineHeight: "130%",
    letterSpacing: "0.1rem",
    textTransform: 'uppercase',
    transition: '0.5s',
    marginBottom: '16px'
  },
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, textStyles, breakpoints })


export default extendTheme(theme);
