import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";

export default function Conference() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf</title>
      </Head>
      <div className="max-w-screen-md px-8 pb-24 mx-auto space-y-8">
        <h1 className="text-4xl font-bold md:text-6xl dark:text-nit-white">
          Natives in Tech Conf
        </h1>
        <div>
          <p className="mb-6 prose prose-lg md:text-lg dark:text-nit-light-grey">
            The Natives in Tech Conference brings together Native and non-Native
            technologists to share projects that empower and support Native
            communities around the world. Natives in Tech seeks to encourage
            Native communities to use technology as a means to empower themselves
            while encoding a traditional worldview.
          </p>

          <p className="mb-6 prose prose-lg md:text-lg dark:text-nit-light-grey">
            Natives in Tech Conf is completely online and free and open to the
            public.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold md:text-4xl dark:text-nit-white">
            Who is this conference for?
          </h2>
          <ul className="mb-6 list-disc md:text-lg dark:text-nit-light-grey">
            <li>Natives working in technology </li>
            <li>
              Non-Natives developing technology that empowers Native peoples
            </li>
            <li>
              Individuals and organizations seeking to engage, learn about, and
              support Native communities
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold md:text-4xl dark:text-nit-white">
            Would you like to present?
          </h2>

          <p className="mb-6 prose prose-lg md:text-lg dark:text-nit-light-grey">
            If you would like to present at this conference, create a session
            using sessionize.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            List of Conferences by Year
          </h2>
          <p className="text-lg prose prose-lg dark:text-nit-light-grey">
            Coming soon...
          </p>
        </div>
        {/* <div className="mt-20">
          <Newsletter />
        </div> */}
      </div>
    </Layout>
  );
}
