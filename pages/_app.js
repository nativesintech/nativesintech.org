import "../styles/index.css";
import Head from "next/head";
import { useRouter } from "next/router";
import * as locales from "../content/locale";
import { IntlProvider, useIntl } from "react-intl";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];
  const header = localeCopy.header;
  const footer = localeCopy.footer;
  const seo = localeCopy.seo;

  return (
    <>
      <Head>
        <title>Natives crafting Native-centric technology</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nativesintech.org/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta
          property="og:image"
          content="https://nativesintech.org/assets/natives_in_tech.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nativesintech.org/" />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta
          property="twitter:image"
          content="https://nativesintech.org/natives_in_tech.png"
        />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <script
          async
          defer
          data-website-id="1cefab40-c814-4a62-9d71-41dac537071f"
          src="https://analytics.nativesintech.org/umami.js"
        ></script>
      </Head>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={{
          ...messages,
          ...header,
          ...footer,
        }}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
