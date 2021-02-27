import { Layout } from "../components/Layout";
import Head from "next/head";
import { Anchor } from "../components/Anchor";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="section">
        <h1 className="h1">Donate</h1>
        <p className="p">
          You can make a tax deductible donation through either a one-time
          payment or subscription to our Open Collective.
        </p>
        <div className="space-y-4">
          <h2 className="h2">Individuals</h2>
          <p className="p">
            Become a financial contributor and help us sustain our community.
          </p>
          <p>
            <Anchor href="https://opencollective.com/natives-in-tech">
              <img src="https://opencollective.com/natives-in-tech/individuals.svg?width=890" />
            </Anchor>
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="h2">Organizations</h2>
          <p className="p">
            Support this project with your organization. Your logo will show up
            here with a link to your website.
          </p>
          <p>
            {Array.from({ length: 10 }, (v, k) => (
              <Anchor
                href={`https://opencollective.com/natives-in-tech/organization/${k}/website`}
              >
                <img
                  src={`https://opencollective.com/natives-in-tech/organization/${k}/avatar.svg`}
                />
              </Anchor>
            ))}
          </p>
        </div>
      </section>
    </Layout>
  );
}
