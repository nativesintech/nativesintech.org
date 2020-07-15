import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";

export default function Conference() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf</title>
      </Head>
      <div className="flex flex-col">
        <div className="lg:w-1/2 md:w-3/4 w-10/12 mx-auto">
          {[
            {
              heading: `Natives in Tech Conf`,
              body: `The Natives in Tech Conference brings together Native and non-Native technologists to share projects that empower and support Native communities around the world.
Natives in Tech seeks to encourage Native communities to use technology as a means to empower themselves while encoding a traditional worldview.`,
            },
            {
              heading: `Who is this conference for?
              `,
              body: `Natives working in technology

Non-Natives developing technology that empowers Native peoples

Individuals and organzations seeking to engage, learn about, and support Native communities`,
            },
            {
              heading: `Would you like to present?
            `,
              body: `If you would like to present at this conference, create a session using sessionize.`,
            },
            {
              heading: `Would you like to attend?
            `,
              body: `Stay up to date on all the latest details by joining our mailing list.

            `,
            },
            {
              heading: `Conferences
            `,
              body: `A list of conferences by year

            2019`,
            },
          ].map((section) => (
            <>
              <h2 className="font-bold mb-3 text-4xl text-gray-800">
                {section.heading}
              </h2>
              <p className="mb-6 text-gray-800 text-lg">{section.body}</p>
            </>
          ))}
        </div>

        <Newsletter />
      </div>
    </Layout>
  );
}
