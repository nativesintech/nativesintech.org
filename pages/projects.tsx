import Head from "next/head";
import React from "react";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import { projectsArr, socialLinksMap } from "../helpers/resources";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Projects</title>
      </Head>

      <section className="section">
        <h1 className="h1">Projects</h1>
        <p className="p">
          A non-exhaustive list of projects we are working on. You can find more
          on our{" "}
          <Anchor href={socialLinksMap.get("GitHub")!.href}>GitHub</Anchor>.
        </p>
        <ul className="ul">
          {projectsArr.map((p) => (
            <li key={p.name}>
              <Anchor href={p.href}>{p.name}</Anchor>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
