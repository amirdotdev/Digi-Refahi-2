import * as React from 'react'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
//! material-ui components

//* components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Interduction from './components/Interduction'
import Services from './components/Services'
import Partners from './components/Partners'
import ServicesItems from './components/ServicesItems'
import Customers from './components/Customers'
import News from './components/News'
import Footer from './components/Footer'
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
}

const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#f5f5f5', overflowX: 'hidden' },
      },
    },
  },
})

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div dir="rtl">
          <Navbar />
          <Hero />
          <Services />
          <Interduction />
          <Partners />
          <ServicesItems />
          <Customers />
          <News />
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
