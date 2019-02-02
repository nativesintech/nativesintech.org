import React from "react";
import { extractCritical } from "emotion-server";

export default ({ App, render }) => {
  const { html, Main, State, Script } = render(<App />);
  const { css, ids } = extractCritical(html);

  return (
    <html>
      <head>
        <title>Natives in Tech</title>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="SyuiaRpl6xD19jqWl4zCCc7bkeawvTUU43Nr2h7rXoY"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source"
        />
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
          content="https://nativesintech.org/images/og-image.jpg"
        />
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
        <meta property="og:url" content="http://nativesintech.org" />
        <meta
          property="og:image"
          content="https://nativesintech.org/images/og-image.jpg"
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
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`
          }}
        />
      </body>
    </html>
  );
};
