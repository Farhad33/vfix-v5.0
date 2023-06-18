import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="VFix provides onsite computer and handyman services such as TV Mounting, Furniture Assembly, Exercise Equipment Assembly wall hanging and more."></meta>
          <meta name="keywords" content="VFix, VFix San Francisco, myvfix, Computer Support, Printer Setup, Wifi Solution, Virus Removal, Electronic Setup, PC Tune-Up, Data Backup, Artificial Intelligence, Smart Home Setup, Smart Lighting, Smart Lock, Smart Remote Setup, Smart Thermostat, Board Installation, Furniture Assembly, Grill Assembly, Handyman Services, TV Mount Service"></meta>
          <link rel="shortcut icon" href="static/assets/logo/site-icon.png"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"></link>
          <link rel="icon" type="image/x-icon" href="assets/favicons/favicon.ico"></link>
          <link href="https://cdn.zenbooker.com/widget/latest/zenbooker.css" rel="stylesheet"></link>
          <script src="https://cdn.zenbooker.com/widget/latest/zenbooker.js" type="text/javascript"></script>
          {this.props.styles} {/* styled-components' styles */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
