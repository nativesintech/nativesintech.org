import React from "react";
import Head from "next/head";
import { useIntl } from "react-intl";

import { Layout } from "../../components/Layout";
import { assets } from "../../helpers/assets";
import { ComponentKeys } from "../../content/types";

const parseHandle = (str: string): string => {
  return str.replace(
    /(@\w+)/gi,
    (h) =>
      `<a
        class="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/${h}"
        >
        ${h}
      </a>&nbsp;`
  );
};

const parseUrl = (str: string): string => {
  return str.replace(
    /(https:\/\/\w+\.com\/\w+)/,
    (u) =>
      `<a class="a" target="_blank" rel="noopener noreferrer" href="${u}">${u}</a>`
  );
};

const parseSchedule = (str: string): Array<JSX.Element> => {
  return str.split("|").map((v, i) => {
    const h = parseHandle(v);
    return <li key={i} dangerouslySetInnerHTML={{ __html: h }} />;
  });
};

const parseRegistration = (str: string): JSX.Element => {
  const s = parseUrl(str);
  return <p className="p" dangerouslySetInnerHTML={{ __html: s }} />;
};

export default function TwentyTwentyTwo() {
  const _workshopSpeakers: Object[] = [];
  const _confSpeakers: Object[] = [];

  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/conference/2022">) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("shortTitle")}</h1>
        <h2 className="h2">{f("sponsors")}</h2>
        <h3 className="h3">{f("partneringSponsor")}</h3>
        <a
          href="https://www.shipt.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="flex justify-center mt-6 bg-white"
            src={assets.conference["2022"].shiptLogo.src}
            alt={assets.conference["2022"].shiptLogo.altText}
          />
        </a>
      </section>
      <section className="section">
        <h2 className="h2">{f("theme")}</h2>
        <p className="p">{f("intro")}</p>
        <p className="p">{f("space")}</p>
        <h3 className="h3">{f("registration")}</h3>
        <>{parseRegistration(f("registrationDetails"))}</>
      </section>
      <section className="section">
        <h2 className="h2">{f("agenda")}</h2>
        <video width="auto" controls preload="auto">
          <source
            src={assets.conference["2022"].speakerLineup}
            type="video/mp4"
          ></source>
        </video>
        <h3 className="h3">{f("demoDay")}</h3>
        <ul className="ul">{parseSchedule(f("demoDaySchedule"))}</ul>
        <h3 className="h3">{f("conferenceDay")}</h3>
        <ul className="ul">{parseSchedule(f("conferenceSchedule"))}</ul>
        <h3 className="h3">{f("registration")}</h3>
        <>{parseRegistration(f("registrationDetails"))}</>
      </section>
    </Layout>
  );
}
