import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="max-w-screen-md px-6 pb-24 mx-auto">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl dark:text-nit-white">
          Donate
        </h1>
        <p className="mb-6 prose dark:text-nit-light-grey text-nit-grey">
          You can make a tax deductible donation through either a one-time
          payment or subscription to our Open Collective.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Individuals
          </h2>
          <p className="dark:text-nit-light-grey text-nit-grey">
            Become a financial contributor and help us sustain our community.
          </p>
          <p>
            <a href="https://opencollective.com/natives-in-tech">
              <img src="https://opencollective.com/natives-in-tech/individuals.svg?width=890" />
            </a>
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Organizations
          </h2>
          <p className="dark:text-nit-light-grey text-nit-grey">
            Support this project with your organization. Your logo will show up
            here with a link to your website.
          </p>
          <p>
            <a href="https://opencollective.com/natives-in-tech/organization/0/website">
              <img src="https://opencollective.com/natives-in-tech/organization/0/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/1/website">
              <img src="https://opencollective.com/natives-in-tech/organization/1/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/2/website">
              <img src="https://opencollective.com/natives-in-tech/organization/2/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/3/website">
              <img src="https://opencollective.com/natives-in-tech/organization/3/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/4/website">
              <img src="https://opencollective.com/natives-in-tech/organization/4/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/5/website">
              <img src="https://opencollective.com/natives-in-tech/organization/5/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/6/website">
              <img src="https://opencollective.com/natives-in-tech/organization/6/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/7/website">
              <img src="https://opencollective.com/natives-in-tech/organization/7/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/8/website">
              <img src="https://opencollective.com/natives-in-tech/organization/8/avatar.svg" />
            </a>
            <a href="https://opencollective.com/natives-in-tech/organization/9/website">
              <img src="https://opencollective.com/natives-in-tech/organization/9/avatar.svg" />
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
