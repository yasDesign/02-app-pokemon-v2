
import React from 'react'
import { Html, Head, NextScript, Main } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

const _document = () => {
  return (
    <Html>
        <Head>{CssBaseline.flush()}</Head>
      <body>
            <Main />
            <NextScript/>
      </body>
    </Html>
  )
}

export default _document