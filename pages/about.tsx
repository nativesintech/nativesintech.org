import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - About</title>
      </Head>
      <section className="section">
        <h1 className="h1">About</h1>

        <h2 className="h2">Initiatives</h2>

        <ul className="space-y-6">
          <li className="space-y-1">
            <h3 className="h3">Networking</h3>
            <p className="p">
              Network with aspiring and experienced technologists alike
            </p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">Social Media Presence</h3>
            <p className="p">
              Create a strong social media presence on platforms familiar to
              technologists
            </p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">Yearly Conference</h3>
            <p className="p">Host a yearly Natives in Tech conference</p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">Build Native-centric technology</h3>
            <p className="p">
              Craft free and open source technology that empowers Native peoples
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
