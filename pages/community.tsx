import Head from "next/head";
import { useIntl } from "react-intl";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import { ComponentKeys } from "../content/types";
import { convertEmailToLink, convertStrToJsx } from "../helpers/convertStr";
import { nitSocials, resources, socials } from "../helpers/resources";

export default function Community() {
  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/community">) => formatMessage({ id });

  const convertBlurb = convertStrToJsx(convertEmailToLink);

  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        <p className="p">{f("blurb")}</p>
        <ul className="ul">
          {[...socials, ...resources]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((l) => (
              <li key={l.name}>
                <Anchor href={l.href}>{l.name}</Anchor>
              </li>
            ))}
        </ul>

        <h2 className="h2">{f("nitCommunityTitle")}</h2>
        {convertBlurb(f("nitCommunityBlurb"))}
        <ul className="ul">
          {[...nitSocials]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((l) => (
              <li key={l.name}>{l.name}</li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
