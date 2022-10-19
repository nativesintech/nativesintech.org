import React from "react";
import Head from "next/head";
import { useIntl } from "react-intl";

import { Anchor } from "../../components/Anchor";
import { Layout } from "../../components/Layout";
import { assets } from "../../helpers/assets";
import { ComponentKeys } from "../../content/types";

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
            src={assets.conference["2022"].shiptLogo.src}
            alt={assets.conference["2022"].shiptLogo.altText}
          />
        </a>
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
      <section className="section">
        <h2 className="h2">{f("agenda")}</h2>
        <h3 className="h3">{f("demoDay")}</h3>
        <p className="p">{f("demoDayDetails")}</p>
        <h3 className="h3">{f("conferenceDay")}</h3>
        <p className="p">{f("conferenceDayDetails")}</p>
        <ul
          className="ul"
          style={{ listStyle: "none", marginTop: "10px", marginBottom: "20px" }}
        >
          {/* <li className="li" >From 12:00pm - 7:30pm CDT</li>
          <li className="li">Location - YouTube Live</li> */}
        </ul>
        <h3 className="h3">{f("schedule")}</h3>
        <video controls>
          <source
            src={assets.conference["2022"].speakerLineup}
            type="video/mp4"
          ></source>
        </video>
        <h3 className="h3">{f("registration")}</h3>
        <p className="p">{f("registrationDetails")}</p>
      </section>
    </Layout>
  );
}
