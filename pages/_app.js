import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import { darktheme } from '../themes/darktheme'

function MyApp({ Component, pageProps }) {
  return (
  <NextUIProvider theme={darktheme}>
    <Component {...pageProps} />
  </NextUIProvider>
  )
}

export default MyApp
