import "../styles/index.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          title: "Natives in Tech",
          type: "website",
          url: "https://nativesintech.org",
          description:
            "Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology.",
          images: [
            {
              url: "https://nativesintech.org/computer.svg",
            },
          ],
          site_name: "Natives in Tech",
        }}
        twitter={{
          site: "@nativesintech",
          handle: "@nativesintech",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
