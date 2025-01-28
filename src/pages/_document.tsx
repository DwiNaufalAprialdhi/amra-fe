import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description goes here." />
        <meta name="author" content="Your Name or Company" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="theme-color" content="#1A0F00" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="Your website description goes here." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta name="twitter:description" content="Your website description goes here." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/amazingramadan.png" />
      </Head>      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
