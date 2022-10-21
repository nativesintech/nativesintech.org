import React from "react";
import Head from "next/head";
import { useIntl } from "react-intl";

import { Anchor } from "../../components/Anchor";
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
      `<a class="a" target="_blank" rel="noopener noreferrer" href="${u}">${u}</>`
  );
};

const parseSchedule = (str: string): Array<JSX.Element> => {
  return str.split("|").map((v, i) => {
    const h = v.replace(/(@\w+)/gi, parseHandle);
    return <li key={i} dangerouslySetInnerHTML={{ __html: h }} />;
  });
};

const parseRegistration = (str: string): JSX.Element => {
  return <p dangerouslySetInnerHTML={{ __html: parseUrl(str) }} />;
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
        <p className="p" id="p1">
          {f("p1")}
        </p>
        <p className="p" id="p2">
          {f("p2")}
        </p>
        <p className="p" id="p3">
          {f("p3")}
        </p>
        <p className="p" id="p4">
          {f("p4")}
        </p>
        <p className="p" id="p5">
          {f("p5")}
        </p>
        <p className="p" id="p6">
          {f("p6")}
        </p>
        <p className="p">
          {f("pleaseFollow")}{" "}
          <Anchor href="https://twitter.com/nativesintech/">Twitter</Anchor>,{" "}
          <Anchor href="https://www.instagram.com/nativesintech/">
            Instagram
          </Anchor>
          , {f("and")}{" "}
          <Anchor href="https://www.facebook.com/nativesintech/">
            Facebook
          </Anchor>
          ! {f("learnMore")}.
        </p>
      </section>
      <section className="flex justify-center section">
        <video width="350" controls preload="auto">
          <source
            src={assets.conference["2022"].gatherTown}
            type="video/mp4"
          ></source>
        </video>
      </section>
      <section className="section">
        <h2 className="h2">{f("agenda")}</h2>
        <h3 className="h3">{f("demoDay")}</h3>
        <ul className="ul">{parseSchedule(f("demoDaySchedule"))}</ul>
        <h3 className="h3">{f("conferenceDay")}</h3>
        <ul className="ul">{parseSchedule(f("conferenceSchedule"))}</ul>
        <h3 className="h3">{f("registration")}</h3>
        <p className="p">{parseRegistration(f("registrationDetails"))}</p>
      </section>
    </Layout>
  );
}
