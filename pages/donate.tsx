import { Layout } from "../components/Layout";
import Head from "next/head";
import { Anchor } from "../components/Anchor";
import { useIntl } from "react-intl";
import { MergedData } from "../content/types";

export default function Donate() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/donate"]) => formatMessage({ id });
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Donate</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        <p className="p">{f("blurb")}</p>
        <div className="space-y-4">
          <h2 className="h2">{f("individualsTitle")}</h2>
          <p className="p">{f("individualsBlurb")}</p>
          <p>
            <Anchor href="https://opencollective.com/natives-in-tech">
              <img src="https://opencollective.com/natives-in-tech/individuals.svg?width=890" />
            </Anchor>
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="h2">{f("organizationsTitle")}</h2>
          <p className="p">{f("organizationsBlurb")}</p>
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
