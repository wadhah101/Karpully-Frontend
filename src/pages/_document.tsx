import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

const description = `Here is a precise description of my awesome webpage`

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <title>Karpully</title>
          <meta property="og:title" content="Karpully" key="title" />
          <meta name="description" content={description} />
        </Head>
        <body className="font-sans ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
