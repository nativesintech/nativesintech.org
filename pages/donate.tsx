import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="max-w-screen-md px-8 pb-24 mx-auto leading-loose">
        <h1 className="mb-3 text-4xl font-bold md:text-6xl dark:text-nit-white">Donate</h1>
        <p className="mb-6 prose prose-lg md:text-xl dark:text-nit-light-grey">
          You can make a tax deductible donation through either a one time
          payment or subscription to our Open Collective.
        </p>

            <a
              className="underline text-nit-primary md:text-xl"
              rel="noopener noreferrer"
              target="_blank"
              href="https://opencollective.com/natives-in-tech"
            >
              Open Collective
            </a>

      </section>
    </Layout>
  );
}
