import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";

export default function Conference() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf</title>
      </Head>
      <div className="max-w-screen-md px-6 pb-24 mx-auto space-y-8">
        <h1 className="text-4xl font-bold md:text-6xl dark:text-nit-white">
          Natives in Tech Conf
        </h1>
        <div className="space-y-1">
          <p className="prose dark:text-nit-light-grey text-nit-grey">
            The Natives in Tech Conference brings together Native technologists
            to share projects that empower and support Native peoples around the
            world.
          </p>
          <p className="prose dark:text-nit-light-grey text-nit-grey">
            Natives in Tech Conf is completely online and free to the public.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Who is this conference for?
          </h2>
          <ul className="prose list-disc dark:text-nit-light-grey text-nit-grey">
            <li>Natives working in technology </li>
            <li>
              Non-Natives developing technology that empowers Native peoples
            </li>
            <li>
              Individuals and organizations seeking to engage, learn about, and
              support Native peoples
            </li>
          </ul>
        </div>

        {/* <div className="space-y-1">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Would you like to present?
          </h2>
          <p className="prose dark:text-nit-light-grey text-nit-grey">
            If you would like to present at this conference, create a session
            using sessionize.
          </p>
        </div> */}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Watch Past Conferences
          </h2>
          <ul className="prose dark:text-nit-light-grey text-nit-grey">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey text-light-grey"
                href="https://www.youtube.com/playlist?list=PLkEm8Fr-qex0P4U-asUIzPXNUl25KV3i-"
              >
                2019
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey text-light-grey"
                href="https://www.youtube.com/watch?v=kV8IpFhZmHs&list=PLkEm8Fr-qex3kvWETUYJ_6iIYrxOQXtwB"
              >
                2020
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="mt-20">
          <Newsletter />
        </div> */}
      </div>
    </Layout>
  );
}
