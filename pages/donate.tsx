import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="max-w-screen-md px-8 pb-24 mx-auto leading-loose">
        <h1 className="mb-3 text-6xl font-bold dark:text-nit-white">Donate</h1>
        <p className="mb-6 text-xl prose prose-lg dark:text-nit-light-grey">
          You can make a tax deductible donation through either a one time
          payment or subscription.
        </p>
        <ol className="mb-6 text-xl">
          <li className="dark:text-nit-light-grey">
            One time payment -{" "}
            <a
              className="underline text-nit-primary"
              rel="noopener noreferrer"
              target="_blank"
              href="https://paypal.me/nativesintech"
            >
              https://paypal.me/nativesintech
            </a>
          </li>
          <li className="dark:text-nit-light-grey">
            Subscription -{" "}
            <a
              className="underline text-nit-primary"
              rel="noopener noreferrer"
              target="_blank"
              href="https://patreon.com/nativesintech"
            >
              https://patreon.com/nativesintech
            </a>
          </li>
        </ol>
      </section>
    </Layout>
  );
}
