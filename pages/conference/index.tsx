import { Layout } from "../../components/Layout";
import { Newsletter } from "../../components/Newsletter";
import Head from "next/head";
import { Anchor } from "../../components/Anchor";
import { useIntl } from "react-intl";
import { MergedData } from "../../content/types";
import Link from "next/link";

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

        <div className="space-y-1">
          <h2 className="text-2xl font-bold md:text-4xl dark:text-nit-white">
            Natives in Tech Conf 2022
          </h2>
          <p className="prose dark:text-nit-light-grey text-nit-grey">
            Interested in participating in our 2022 conference?
          </p>
          <br/>
          <Link href="/conference/2022" passHref>
            <a className="bg-nit-dark text-nit-white px-4 py-2 text-sm font-bold rounded-md no-underline">
              Natives in Tech 2022
            </a>
          </Link>
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
