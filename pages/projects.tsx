import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import { MergedData } from "../content/types";
import { projectsArr, socialLinksMap } from "../helpers/resources";

export default function Projects() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/projects"]) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>

      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        <p className="p">
          {f("blurb")}
          <Anchor href={socialLinksMap.get("GitHub")!.href}>GitHub</Anchor>.
        </p>
        <ul className="ul">
          {projectsArr
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
