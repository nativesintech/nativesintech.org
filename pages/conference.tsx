import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";
import { Anchor } from "../components/Anchor";

export default function Conference() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech Conf</title>
      </Head>
      <section className="section">
        <h1 className="h1">Natives in Tech Conf</h1>
        <div className="space-y-1 ">
          <p className="p">
            The Natives in Tech Conference brings together Native technologists
            to share projects that empower and support Native peoples around the
            world.
          </p>
          <p className="p">
            Natives in Tech Conf is completely online and free to the public.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="h2">Who is this conference for?</h2>
          <ul className="ul">
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
          <h2 className="h2">Watch Past Conferences</h2>
          <ul className="ul">
            <li>
              <Anchor href="https://www.youtube.com/playlist?list=PLkEm8Fr-qex0P4U-asUIzPXNUl25KV3i-">
                2019
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.youtube.com/watch?v=kV8IpFhZmHs&list=PLkEm8Fr-qex3kvWETUYJ_6iIYrxOQXtwB">
                2020
              </Anchor>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
