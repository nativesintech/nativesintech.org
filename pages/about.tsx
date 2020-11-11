import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - About</title>
      </Head>
      <section className="max-w-screen-md px-6 mx-auto space-y-8">
        <h1 className="text-4xl font-bold md:text-6xl dark:text-nit-white">About</h1>

        <h2 className="text-xl font-bold md:text-4xl dark:text-nit-white">Initiatives</h2>

        <ul className="space-y-8 ">
          <li className="space-y-1">
            <h3 className="text-lg md:text-2xl dark:text-nit-white">Networking</h3>
            <p className="dark:text-nit-light-grey text-nit-grey">
              Networking with aspiring and experienced technologists alike
            </p>
          </li>

          <li className="space-y-1">
            <h3 className="text-lg md:text-2xl dark:text-nit-white">
              Social Media Presence
            </h3>
            <p className="dark:text-nit-light-grey text-nit-grey">
              Creating a strong social media presence on platforms familiar to
              technologists
            </p>
          </li>

          <li className="space-y-1">
            <h3 className="text-lg md:text-2xl dark:text-nit-white">Yearly Conference</h3>
            <p className="dark:text-nit-light-grey text-nit-grey">
              Hosting a yearly Natives in Tech conference
            </p>
          </li>

          <li className="space-y-1">
            <h3 className="text-lg md:text-2xl dark:text-nit-white">
              Developing Indigenous-centric technology
            </h3>
            <p className="dark:text-nit-light-grey text-nit-grey">
              Building open source technology that Native peoples can use to
              cultivate healthy online communities
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
