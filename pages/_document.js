import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta content="Homepage" name="description" />
          <meta content="website" property="og:type" />
        </Head>
        <body>
          <Main/>
          <NextScript />

          <style jsx>{`
            @import 'tachyons/src/tachyons';
            html, body {
              height: 100%;
              background: navy;
            }
          `}</style>
        </body>
      </html>
    )
  }
}
