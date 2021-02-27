import Head from "next/head";
import { Anchor } from "../components/Anchor";
import { Layout } from "../components/Layout";
import {
  nitSocialArr,
  resourceLinksArr,
  socialLinksArr,
} from "../helpers/resources";

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Community</title>
      </Head>
      <section className="section">
        <h1 className="h1">Community</h1>
        <p className="p">
          Stay up-to-date with Natives in Tech from our various social media
          channels.
        </p>
        <ul className="ul">
          {socialLinksArr.map((l) => (
            <li>
              <Anchor href={l.href}>{l.name}</Anchor>
            </li>
          ))}
          {resourceLinksArr.map((l) => (
            <li>
              <Anchor href={l.href}>{l.name}</Anchor>
            </li>
          ))}
        </ul>

        <h2 className="h2">NiT Community</h2>
        <p className="p">
          If you are a Native person in tech and would like to join our Native
          social channels then please send an email with your name, the
          community you would like to join, and your nation to{" "}
          <a className="a" href="mailto:hello@nativesintech.org">
            hello@nativesintech.org
          </a>
          .
        </p>

        <ul className="ul">
          {nitSocialArr.map((l) => (
            <li>{l.name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
