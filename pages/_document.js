import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Professional portfolio showcasing my work and skills" />
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing my work and skills" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}