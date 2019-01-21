import React from "react";
import { extractCritical } from "emotion-server";

export default ({ App, render }) => {
  const { html, Main, State, Script } = render(<App />);
  const { css, ids } = extractCritical(html);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source"
        />
        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nativesintech" />
        <meta name="twitter:creator" content="@nativesintech" />
        <meta name="twitter:title" content="Natives in Tech" />
        <meta
          name="twitter:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta
          name="twitter:image"
          content="https://natives-in-tech.netlify.com/og-image.jpg"
        />
        {/* Open Graph Data */}
        <meta property="og:site_name" content="Natives in Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image:height" content="319" />
        <meta property="og:image:width" content="609" />
        <meta property="og:title" content="Natives in Tech" />
        <meta
          property="og:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta property="og:url" content="http://natives-in-tech.netlify.com" />
        <meta
          property="og:image"
          content="https://natives-in-tech.netlify.com/images/og-image.jpg"
        />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7b7b7b" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Styles */}
        <link rel="stylesheet" href="/styles.css" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <Main />
        <State />
        <Script />
        <script
          dangerouslySetInnerHTML={{
            __html: `window._emotion = ${JSON.stringify(ids)}`
          }}
        />
      </body>
    </html>
  );
};
