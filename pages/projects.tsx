import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import { ComponentKeys } from "../content/types";
import { convertStrToJsx, convertUrlToLink } from "../helpers/convertStr";
import { projects } from "../helpers/resources";

export default function Projects() {
  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/projects">) => formatMessage({ id });

  const convertBlurb = convertStrToJsx(convertUrlToLink);

  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>

      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        {convertBlurb(f("blurb"))}
        <ul className="ul">
          {[...projects]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((p) => (
              <li key={p.name}>
                <Anchor href={p.href}>{p.name}</Anchor>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
