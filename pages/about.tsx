import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { useIntl } from "react-intl";
import { ComponentKeys } from "../content/types";
import { Anchor } from "../components/Anchor";

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/about">) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
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
      <section className="section">
        <h2 className="h2">Sponsors</h2>
        <p className="p">
          Thank you to our sponsors and community supporters for supporting us
          and our work!
        </p>

        <h3 className="h3">Organizational Sponsors</h3>
        <ul className="space-y-6">
          <li>
            <Anchor href="https://shipt.com">Shipt</Anchor>
          </li>
        </ul>
        <h3 className="h3">Past Sponsors</h3>
        <ul className="space-y-6">
          <li>
            <Anchor href="https://bestbuy.com">Best Buy</Anchor>
          </li>
        </ul>
        <h3 className="h3">Community Supporters</h3>
        <ul className="space-y-6">
          <li>
            <Anchor href="https://animikii.com/">Animikii</Anchor>
          </li>
          <li>
            <Anchor href="https://nucamp.co">Nucamp</Anchor>
          </li>
          <li>
            <Anchor href="https://www.pdxwit.org/">PDXWIT</Anchor>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
