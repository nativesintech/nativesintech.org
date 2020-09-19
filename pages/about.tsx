import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - About</title>
      </Head>
      <section className="max-w-screen-md px-8 mx-auto space-y-6">
        <h1 className="text-6xl font-bold dark:text-nit-white">About</h1>

        <h2 className="text-4xl dark:text-nit-white">Initiatives</h2>

        <div className="space-y-2">
          <h3 className="text-2xl dark:text-nit-white">Networking</h3>
          <p className="dark:text-nit-light-grey">
            Networking with aspiring and experienced technologists alike
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl dark:text-nit-white">
            Social Media Presence
          </h3>
          <p className="dark:text-nit-light-grey">
            Creating a strong social media presence on platforms familiar to
            technologists
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl dark:text-nit-white">Yearly Conference</h3>
          <p className="dark:text-nit-light-grey">
            Hosting a yearly Natives in Tech conference
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl dark:text-nit-white">
            Developing Indigenous-centric technology
          </h3>
          <p className="dark:text-nit-light-grey">
            Building open source technology that Native peoples can use to
            cultivate healthy online communities
          </p>
        </div>
      </section>
    </Layout>
  );
}
