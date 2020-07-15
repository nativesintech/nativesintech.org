import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="max-w-screen-md mx-auto leading-loose pb-24 px-8">
        <h1 className="font-bold mb-3 text-6xl text-gray-800">Donate</h1>
        <p className="mb-6 text-gray-800 text-xl">
          You can make a tax deductible donation through either a one time
          payment or subscription.
        </p>
        <ol className="mb-6 text-gray-800 text-xl ">
          <li>
            One time payment -{" "}
            <a
              className="text-teal-400 hover:text-teal-500"
              rel="noopener noreferrer"
              target="_blank"
              href="https://paypal.me/nativesintech"
            >
              https://paypal.me/nativesintech
            </a>
          </li>
          <li>
            Subscription -{" "}
            <a
              className="text-teal-400 hover:text-teal-500"
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
