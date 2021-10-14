import Head from "next/head";
import React from "react";
import { Anchor } from "../../components/Anchor";
import { Layout } from "../../components/Layout";

export default function TwentyTwentyOne() {
  const workshopSpeakers = [
    {
      name: "Keoni Mahelona",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      photo: null,
      bio: "TBD",
    },
    {
      name: "Michael Running Wolf",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      photo: null,
      bio: "TBD",
    },
  ];
  const confSpeakers = [
    {
      name: "John Romero",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Game Development",
      session: "TBD",
      photo: null,
      bio: 'John Romero is an award-winning game programmer, designer and level designer whose work spans over 130 games, 108 of which have been published commercially. Romero is the "father of first person shooters" having led the design and contributed to the programming and audio design of the iconic and genre-defining games DOOM, Quake, Heretic and Hexen. Romero is also one of the earliest supporters of eSports and a current competitive DOOM and Quake player. To date, Romero has co-founded eight successful game companies including the likes of id Software. He is considered to be among the world’s top game designers, and his products have won well over 100 awards. Romero most recently won a Lifetime Achievement award at the Fun & Serious Games Festival in Bilbao and the Legend Award at 2017’s Develop: Brighton. One of the earliest indie developers, Romero began working in the game space in 1979 on mainframes before moving to the Apple II in 1981. He is a completely self-taught programmer, designer and artist, having drawn his inspirations from early Apple II programmers.',
    },
    {
      name: "Nicole Archambault",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Getting into Tech",
      session: "TBD",
      photo: null,
      bio: ` Nicole Archambault is a Boston-based educational technology specialist, online course creator, speaker, blogger, and podcaster.\n She is creator of La Vie en Code, and La Vie en Code LaunchPad, a learning community designed to advocate for, support, and educate self-taught for individuals seeking non-traditional routes into the web development industry.\n A lifelong learner, her passion and area of expertise is in educational technology, gamification, and psychology. If we can make learning fun and productive—let’s do it! :)
      `,
    },
    {
      name: "Kari Noe",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Game Development",
      session: "Building an Emerging Media Lab: The Story of Create(x)",
      photo: null,
      bio: `Kari Noe is a mixed Kanaka 'Ōiwi PhD student at the Laboratory for Advanced Visualization and Applications (LAVA) (https://www.lavaflow.info/), Pursuing a PhD in Computer Science at the University of Hawai’i at Mānoa. Her interests are Interactive Design, Virtual/Augmented Reality Dev, Video Game Dev, Illustration, and Animation.\n Her current work is the development of Create(x) an emerging media laboratory for students to develop and showcase their works at the intersection of creative media, computation, culture, art and science at the Academy of Creative Media in the University of Hawai’i at West O’ahu.`,
    },
    {
      name: "Dakota J Lightning",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Getting into Tech",
      session: "TBD",
      photo: null,
      bio: "TBD",
    },
    {
      name: "Lauren Denson",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Getting into Tech",
      session: "Storytelling with: B.I.R.P.’s & P.H.A.R.T.S.",
      photo: null,
      bio: "TBD",
    },
    {
      name: "Natalie Isabel Contreras",
      social: [{ email: "", instagram: "", twitter: "", linkedin: "" }],
      track: "Getting into Tech",
      session: "TBD",
      photo: null,
      bio: "Through her work with the Adobe Digital Academy as well as other local organizations, Natalie’s efforts to make the technology ecosystem more diverse and inclusive are informed from her own experience and understanding of the complexities as a multi-lineage Bay Area born resident breaking into tech. With her experience in education and non-profit curriculum development, she is bringing an innovative approach to creating access and bridging different communities in the innovation space. She has experience as an educator, multidisciplinary creative and program manager and has served different Bay Area organizations & initiatives. As a leader in the Social Impact space, she is passionate about strengthening connections as well as increasing access to opportunities between innovation, creativity and BIPOC culture & community. Natalie is excited to share her insights now as Program Manager for the Adobe Digital Academy.",
    },
  ];
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
              Posts referencing #MMIW taken down on Instagram
            </Anchor>
          </li>
        </ul>
        <p className="p">
          As more of our work and livelihoods are ingrained with technology, we need platforms that protect us within
          this space. Natives in Tech Conf is an opportunity to explore solutions to these problems. Solutions for
          Native people by Native people.
        </p>
        <p className="p">
          The conference starts on Friday Nov. 5th, 2021 with a workshop on Native language preservation by{" "}
          <Anchor href="https://indigenousinai.org/">Indigenous in AI</Anchor>. On Saturday Nov. 6th, 2021 we will
          live-steam our virtual conference focusing on two tracks: Game Dev and Getting into Tech.
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
      <section className="section">
        <h2 className="h2">Tentative Agenda</h2>
        <h3 className="h3">Workshop</h3>
        <h4 className="h4">Details</h4>
        <ul className="ul">
          <li className="li">Time - Nov 5th 2021</li>
          <li className="li">Location - Zoom</li>
        </ul>
        <h4 className="pb-5 h4">Speakers</h4>
        <ul className="list-none ul">
          {workshopSpeakers.map((v) => (
            <li className="li" key={v.name}>
              <label className="label-header">Name</label>
              <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                {v.name}
              </h5>
              <label className="label-header">Bio</label>
              <p className="pb-5 dark:text-white p" style={{ marginTop: 0 }}>
                {v.bio}
              </p>
            </li>
          ))}
        </ul>
        <h3 className="h3">Conference</h3>
        <h4 className="h4">Details</h4>
        <ul className="ul">
          <li className="li">Time - Nov 6th 2021</li>
          <li className="li">Location - YouTube Live</li>
        </ul>
        <h4 className="h4">Speakers</h4>
        <ul className="list-none ul">
          {confSpeakers.map((v, idx) => (
            <React.Fragment key={v.name}>
              {idx === 0 ? <></> : <hr className="hr" />}
              <li className="li">
                <label className="label-header">Track</label>
                <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                  {v.track}
                </h5>
                <label className="label-header">Session</label>
                <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                  {v.session}
                </h5>
                <label className="label-header">Name</label>
                <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                  {v.name}
                </h5>
                <label className="label-header">Image</label>
                <br />
                {v.photo ? (
                  <img src={v.photo} />
                ) : (
                  <p className="dark:text-white p" style={{ marginTop: 0, marginBottom: 0 }}>
                    TBD
                  </p>
                )}
                <br />
                <label className="label-header">Bio</label>
                <p className="dark:text-white p " style={{ marginTop: 0 }}>
                  {v.bio}
                </p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
