import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";

export default function Conference() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf</title>
      </Head>
      <div className="max-w-screen-md mx-auto pb-24 px-8">
        <h1 className="font-bold mb-3 text-6xl">Natives in Tech Conf</h1>

        <p className="mb-6 text-lg prose prose-lg">
          The Natives in Tech Conference brings together Native and non-Native
          technologists to share projects that empower and support Native
          communities around the world. Natives in Tech seeks to encourage
          Native communities to use technology as a means to empower themselves
          while encoding a traditional worldview.
        </p>

        <p className="mb-6 text-lg prose prose-lg">
          Natives in Tech Conf is completely online and free and open to the
          public.
        </p>

        <h2 className="font-bold mb-3 text-4xl">Who is this conference for?</h2>

        <ul className="mb-6 text-lg prose prose-lg list-disc">
          <li>Natives working in technology </li>
          <li>
            Non-Natives developing technology that empowers Native peoples
          </li>
          <li>
            Individuals and organizations seeking to engage, learn about, and
            support Native communities
          </li>
        </ul>

        <h2 className="font-bold mb-3 text-4xl">Would you like to present?</h2>

        <p className="mb-6 text-lg prose prose-lg">
          If you would like to present at this conference, create a session
          using sessionize.
        </p>

        <h2 className="font-bold mb-3 text-4xl">List of Conferences by Year</h2>

        <p className="mb-6 text-lg prose prose-lg">Coming soon...</p>

        {/* <div className="mt-20">
          <Newsletter />
        </div> */}
      </div>
    </Layout>
  );
}
