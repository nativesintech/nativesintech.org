import { Layout } from "../../components/Layout";
import Head from "next/head";
import { Anchor } from "../../components/Anchor";
import { useIntl } from "react-intl";
import { ComponentKeys } from "../../content/types";

export default function Conference() {
  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/conference">) => formatMessage({ id });

  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>
      <section className="section">
        <h1 className="h1">{f("h1")}</h1>
        <div className="space-y-1 ">
          <p className="p">{f("blurb")}</p>
        </div>
        <div className="space-y-4">
          <h2 className="h2">{f("conferenceForTitle")}</h2>
          <ul className="ul">
            <li>{f("conferenceForItem1")}</li>
            <li>{f("conferenceForItem2")}</li>
            <li>{f("conferenceForItem3")}</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="h2">{f("watchTitle")}</h2>
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
            <li>
              <Anchor href="https://www.youtube.com/playlist?list=PLkEm8Fr-qex18al1p2l-Z3ioWRn75tvnp">
                2021
              </Anchor>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
