import Head from "next/head";
import React from "react";
import { Anchor } from "../../components/Anchor";
import { Layout } from "../../components/Layout";

export default function TwentyTwentyOne() {
  const workshopSpeakers = [
  ];
  const confSpeakers = [
  ];
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf 2022</title>
      </Head>
      <section className="section">
        <h1 className="h1">Natives in Tech Conf 2022: ???</h1>
        <p className="p">
          ???
        </p>
        <p className="p">
          Please follow us on twitter <Anchor href="https://twitter.com/nativesintech">@nativesintech</Anchor>! If you'd
          like to sponsor this event please send an email to{" "}
          <Anchor href="mailto:desiree@nativesintech.org">desiree@nativesintech.org</Anchor>.
        </p>
      </section>
      <section className="section">
      <h2 className="h2">Agenda</h2>
        <h3 className="h3">Friday, November 5th — Workshops</h3>
        {/* <img src="https://pbs.twimg.com/media/FDNF7pmWQAM5q2_?format=jpg&name=medium" style={{height: "400px", margin: "auto", marginTop: "30px"}} /> */}
        {/* <h4 className="h4">Details</h4> */}
        <ul className="ul" style={{listStyle: "none", marginTop: "15px"}}>
          {/* <li className="li">Workshop 1: <span style={{fontWeight: 600}}>1:00pm - 3:00pm CDT</span></li>
          <li className="li">Workshop 2: <span style={{fontWeight: 600}}>6:00pm - 8:00pm CDT</span></li>
          <li className="li">Location - Zoom</li> */}
        </ul>
        {/* <img src="https://pbs.twimg.com/media/FDNF7pmWQAM5q2_?format=jpg&name=medium" /> */}
        {/* <h4 className="pb-5 h4">Speakers</h4> */}
        {/* <ul className="list-none ul">
          {workshopSpeakers.map((v) => (
            <li className="li" key={v.name}>
              <label className="label-header">Name</label>
              <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                {v.name}
              </h5>
              <label className="label-header">Bio</label>
              <p className="pb-5 text-white p" style={{ marginTop: 0 }}>
                {v.bio}
              </p>
            </li>
          ))}
        </ul> */}
        <h3 className="h3">Saturday, November 6th — Conference</h3>
        <ul className="ul" style={{listStyle: "none", marginTop: "10px", marginBottom: "20px"}}>
          {/* <li className="li" >From 12:00pm - 7:30pm CDT</li>
          <li className="li">Location - YouTube Live</li> */}
        </ul>
        <h4 className="h4">Schedule</h4>
        {/* <h4 className="h4">Speakers</h4> */}
        <ul className="list-none ul">
          {confSpeakers.map((v, idx) => (
            <React.Fragment key={v.name}>
              {idx === 0 ? <></> : <hr className="hr" />}
              <li className="li">
              {/* <label className="label-header">Time</label> */}
                <h5 className="pb-2 h5" style={{ marginTop: 0, color: "" }}>
                  {v.time}
                </h5>
                {/* <label className="label-header">Track</label>
                <h5 className="pb-5 h5" style={{ marginTop: 0 }}>
                  {v.track}
                </h5> */}
                {/* <label className="label-header">Name</label> */}
                <h5 className="pb-1 h3" style={{ marginTop: 0, fontStyle: "bold", color: "" }}>
                  {v.name} {v.session ? ( `—  ${v.session}` ) : (null) }
                </h5>
                {/* <label className="label-header">Session</label> */}
                {/* <h5 className="pb-5 h5" style={{ marginTop: 0, fontStyle: "italic" }}>
                  {v.session}
                </h5> */}
                {/* <label className="label-header">Image</label> */}
                {v.photo ? (
                  <img src={v.photo} style={{height: "", margin: "", marginTop: ""}} />
                ) : (null
                  // <p className="text-white p" style={{ marginTop: 0, marginBottom: 0 }}>
                  //   TBD
                  // </p>
                )}
                {/* <br />
                <label className="label-header">Bio</label>
                <p className="text-white p" style={{ marginTop: 0 }}>
                  {v.bio}
                </p> */}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </Layout>
  );
}