import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="max-w-screen-md px-6 pb-24 mx-auto">
        <h1 className="mb-3 text-4xl font-bold md:text-6xl dark:text-nit-white">Donate</h1>
        <p className="mb-6 prose dark:text-nit-light-grey text-nit-grey">
          You can make a tax deductible donation through either a one time
          payment or subscription to our Open Collective.
        </p>

            <a
              className="underline text-nit-primary"
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
