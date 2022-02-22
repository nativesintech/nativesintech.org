import Head from "next/head";
import React from "react";
import { Anchor } from "../../components/Anchor";
import { Layout } from "../../components/Layout";
import Link from "next/link";

export default function TwentyTwentyOne() {
  const workshopSpeakers: Object[] = [
  ];
  const confSpeakers: Object[] = [
  ];
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf 2022</title>
      </Head>
      <section className="section">
        <h1 className="h1">Natives in Tech Conf 2022</h1>
        <h2 className="h2">Developing Sovereignty in Tech</h2>
        <p className="p">
          We’re excited to announce the 4th annual Natives in Tech Conference on <b>Nov 4-5, 2022</b>!
        </p>
        <p className="p">
          This year is exceptionally exciting because we will be hosting the NiTConf2022 in Gather Town! The team has spent many hours developing a unique space with cultural significance by integrating Native objects and significant places we use to "gather" to celebrate as a community. Our work is always guided by our traditional knowledge and ways, and the goal was to create a virtual space with a tech conference experience that reflects us, the Natives technologists. We hope you enjoy it as much as we do and we can’t wait to share this sacred space with you!
        </p>
        <p className="p">
          We are planning two full days of demos and presentations focusing on this year's theme, "<b>Developing Sovereignty in Tech</b>".
        </p>
        <p className="p">
          There will be opportunities to engage with speakers, attendees, and a few select sponsors on both days. Friday's Meet & Greets are Native led and by Invitation Only and Saturday's Meet & Greets are open to all attendees.
        </p>
        <p className="p">
          During these two days we hope you will join us in listening, learning and celebrating the accomplishments and work being done to address data sovereignty issues Native people and communities face within technology. We look forward to the speakers inspiring innovation and sparking conversations so together we can continue to craft technology that truly serves Native communities.
        </p>
        <p className="p">
          Come learn from Native technologists developing the path forward!
        </p>
        <p className="p">
          Please follow us on <Anchor href="https://twitter.com/nativesintech/">Twitter</Anchor>, <Anchor href="https://www.instagram.com/nativesintech/">Instagram</Anchor>, and <Anchor href="https://www.facebook.com/nativesintech/">Facebook</Anchor>! If you are interested and would like to learn more about becoming a NiTConf2022 sponsor, please send an email to <Anchor href="mailto:conf@nativesintech.org">conf@nativesintech.org</Anchor>.
        </p>
        <p className="p">
          Please follow us on twitter <Anchor href="https://twitter.com/nativesintech">@nativesintech</Anchor>! If you'd
          like to sponsor this event please send an email to <Anchor href="mailto:conf@nativesintech.org">conf@nativesintech.org</Anchor>.
        </p>
      </section>
      <section className="section">
        <h2 className="h2">
          Interested in speaking?
        </h2>
        <br/>
        <Link href="https://sessionize.com/nitconf2022/" passHref>
          <a className="bg-nit-dark text-nit-white px-4 py-2 text-sm font-bold rounded-md no-underline">
            Call for Speakers - Opens 20 March, 2022
          </a>
        </Link>
      </section>
      <section className="section">
      <h2 className="h2">Agenda</h2>
        <h3 className="h3">Friday, November 5th — Demo Day</h3>
        <p className="p">
          Presenters will have up to 20 minutes to demo their project, app, or other type of technology they developed, or currently developing, related to Developing Sovereignty in Tech. 
        </p>
        <h3 className="h3">Saturday, November 6th — Conference</h3>
        <p className="p">
          We start the day off with lightning talks, workshops, and sessions. This year we are excited to offer 4 Tracks: Native Entrepreneurship, Ethics in Tech, Data Sovereignty, and Native Led Solutions. 
        </p>
        <ul className="ul" style={{listStyle: "none", marginTop: "10px", marginBottom: "20px"}}>
          {/* <li className="li" >From 12:00pm - 7:30pm CDT</li>
          <li className="li">Location - YouTube Live</li> */}
        </ul>
        <h4 className="h4">Schedule</h4>
        <p className="p">
          TBA!
        </p>
      </section>
    </Layout>
  );
}