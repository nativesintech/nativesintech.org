import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title: string;
};

export function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Natives in Tech is a coalition of Native and non-Native technologists who seek to empower and support Native communities around the world through open source technology."
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source"
        />

        <meta name="twitter:title" content={props.title} />
        <meta
          name="twitter:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology."
        />
        <meta
          name="twitter:image"
          content="https://nativesintech.org/computer.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={props.title} />
        <meta
          property="og:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology."
        />
        <meta property="og:url" content="https://nativesintech.org" />
        <meta
          property="og:image"
          content="https://nativesintech.org/computer.svg"
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
      </Head>
      <Header />
      <main className="flex-1 w-full">{props.children}</main>
      <Footer />
    </div>
  );
}
