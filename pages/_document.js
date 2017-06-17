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
            @custom-media --breakpoint-not-small screen and (min-width: 48em);
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
