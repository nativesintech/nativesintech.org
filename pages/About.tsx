import React from "react";
import { Layout } from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 md:w-3/4 w-10/12 mx-auto">
          {[
            {
              heading: `Why?`,
              body: `In recent years, open source development has exploded and a new generation of software applications have captivated the minds of users from all walks of life. New software technologies and design patterns have made it easier for developers to quickly protoype, build, and ship high quality software applications for users all around the world. In turn, Native peoples have adopted these applications as the de facto standard for engaging with other community members. What if instead of social media applications that are geared towards everyone, there were applications geared towards Native communities and their specific needs, interests, and identities? What if when you read someone's profile you also learned what clan or band they are from? What if you could learn they spoke your tribal language? These are the kinds of questions that the Natives in Tech community hopes to answer and we would like you to be a part of it!`
            },
            {
              heading: ` `,
            <React.Fragment key={section.heading}>
              <h2 className="font-bold mb-3 text-6xl text-gray-800">
                {section.heading}
              </h2>
              <p className="mb-6 text-gray-800 text-lg">{section.body}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
}
