import React from "react";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <Layout>
      <NextSeo title="Natives in Tech - About" />
      <section className="max-w-screen-md mx-auto leading-loose pb-24">
        <h1 className="font-bold mb-3 text-6xl text-gray-800">About</h1>
        <p className="mb-6 text-gray-800 text-xl">
          In recent years, open source development has exploded and a new
          generation of technology has captivated the minds of users from all
          walks of life. New technologies and design patterns have made it
          easier for technologists to quickly prototype, build, and ship high
          quality technology for users all around the world. In turn, Native
          peoples have adopted these applications as the de facto standard for
          engaging with other community members. What if instead of social media
          applications that are geared towards everyone, there were applications
          geared towards Native communities and their specific needs, interests,
          and identities? What if when you read someone's profile you also
          learned what clan or band they are from? What if you could learn they
          spoke your tribal language? These are the kinds of questions that the
          Natives in Tech community hopes to answer and we would like you to be
          a part of it!
        </p>
        <p className="text-gray-800 text-xl">
          Natives in Tech is a coalition of Native and non-Native technologists
          whose goal is to support technology that reinforces Native beliefs,
          knowledge, and identity. This is achieved through four initiatives:
          networking with aspiring and experienced technologists alike, creating
          a strong social media presence on platforms familiar to technologists,
          hosting a yearly Natives in Tech conference, and building open source
          technology that Native peoples can use to cultivate healthy online
          communities. Through these initiatives we hope to build a strong
          community of technologists that have the power to shape the online
          future of the communities they serve.
        </p>
      </section>
    </Layout>
  );
}
