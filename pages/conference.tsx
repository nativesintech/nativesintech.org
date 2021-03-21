import { Layout } from "../components/Layout";
import { Newsletter } from "../components/Newsletter";
import Head from "next/head";
import { Anchor } from "../components/Anchor";
import { useIntl } from "react-intl";
import { MergedData } from "../content/types";

export default function Conference() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/conference"]) => formatMessage({ id });

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
          </ul>
        </div>
      </section>
    </Layout>
  );
}
