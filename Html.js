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
        <meta name="twitter:image" content="" />
        {/* Open Graph Data */}
        <meta property="og:site_name" content="Natives in Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Natives in Tech" />
        <meta
          property="og:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta property="og:image" content="" />
        <link rel="stylesheet" href="/styles.css" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <script src="https://www.google.com/recaptcha/api.js" />
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
