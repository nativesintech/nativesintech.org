import Head from "next/head";
import { useIntl } from "react-intl";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import { MergedData } from "../content/types";
import {
  nitSocialArr,
  resourceLinksArr,
  socialLinksArr,
} from "../helpers/resources";

export default function Community() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/community"]) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Community</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        <p className="p">{f("blurb")}</p>
        <ul className="ul">
          {socialLinksArr.map((l) => (
            <li key={l.name}>
              <Anchor href={l.href}>{l.name}</Anchor>
            </li>
          ))}
          {resourceLinksArr.map((l) => (
            <li key={l.name}>
              <Anchor href={l.href}>{l.name}</Anchor>
            </li>
          ))}
        </ul>

        <h2 className="h2">{f("nitCommunityTitle")}</h2>
        <p className="p">
          {f("nitCommunityBlurb")}{" "}
          <a className="a" href="mailto:hello@nativesintech.org">
            hello@nativesintech.org
          </a>
          .
        </p>

        <ul className="ul">
          {nitSocialArr.map((l) => (
            <li key={l.name}>{l.name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
