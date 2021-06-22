import Head from "next/head";
import { Anchor } from "../../components/Anchor";
import { Layout } from "../../components/Layout";

export default function TwentyTwentyOne() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf 2021</title>
      </Head>
      <section className="section">
        <h1 className="h1">Natives in Tech Conf 2021: Encoding Native Knowledge</h1>
        <p className="p">
          We are excited to announce the return of our annual conference for Natives in Tech! We have two special days
          planned to learn and address important issues Native people face within technology. We hope to spur
          conversations and ideas so together we can craft technology that truly serves Native communities.
        </p>
        <p className="p">This year we've seen how tech can negatively impact Native peoples.</p>
        <ul className="ul">
          <li>
            <Anchor href="https://www.reddit.com/r/IndianCountry/comments/kqc5aj/instagram_deleting_beaders/">
              Native artisans kicked off Instagram
            </Anchor>
          </li>
          <li>
            <Anchor href="https://twitter.com/ryanredcorn/status/1365856246306377735?s=20">
              Etsy failing to protect intellectual property of Native artists
            </Anchor>
          </li>
          <li>
            <Anchor href="https://www.ctvnews.ca/sci-tech/complaints-flood-social-media-as-indigenous-stories-disappear-on-instagram-1.5418147">
              Posts referencing #MMIW take down on Instagram
            </Anchor>
          </li>
        </ul>
        <p className="p">
          As more of our work and livelihoods are ingrained with technology we need platforms that protect us within
          this space. Natives in Tech Conf is an opportunity to explore solutions to these problems. Solutions for
          Native people by Native people.
        </p>
        <p className="p">
          The conference starts on Friday Nov. 5th, 2021 with a workshop on Native language preservation. On Saturday
          Nov. 6th, 2021 we will live-steam our virtual conference focusing on two tracks: Game Dev and Getting into
          Tech.
        </p>
        <p className="p">
          We hope Native people and thoughtful allies will join us for a wonderful event that uplifts Native people
          doing great work in technology. Come learn from Native technologists cutting the path forward!
        </p>
        <p className="p">
          Please follow us on twitter <Anchor href="https://twitter.com/nativesintech">@nativesintech</Anchor>! If you'd
          like to sponsor this event please send an email to{" "}
          <Anchor href="mailto:desiree@nativesintech.org">desiree@nativesintech.org</Anchor>.
        </p>
      </section>
    </Layout>
  );
}
