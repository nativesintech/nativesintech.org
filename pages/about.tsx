import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { useIntl } from "react-intl";
import { MergedData } from "../content/types";

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/about"]) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - About</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("h1")}</h1>

        <h2 className="h2">{f("h2")}</h2>

        <ul className="space-y-6">
          <li className="space-y-1">
            <h3 className="h3">{f("networkTitle")}</h3>
            <p className="p">{f("networkBlurb")}</p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">{f("socialMediaTitle")}</h3>
            <p className="p">{f("socialMediaBlurb")}</p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">{f("conferenceTitle")}</h3>
            <p className="p">{f("conferenceBlurb")}</p>
          </li>

          <li className="space-y-1">
            <h3 className="h3">{f("buildTitle")}</h3>
            <p className="p">{f("buildBlurb")}</p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
