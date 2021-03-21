import React from "react";
import Typed from "typed.js";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { assets } from "../helpers/assets";
import Link from "next/link";
import shuffle from "lodash.shuffle";
import { useIntl } from "react-intl";
import { MergedData } from "../content/types";

export default function Index() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData["/"]) => formatMessage({ id });

  const typedRef = React.createRef<HTMLDivElement>();

  const options = {
    strings: shuffle(
      [
        "s@^gaê'lA", // Euchee/Yuchi
        "Hesci", // Muscogee (Creek) / Seminole
        "Yá'át'ééh", // Navajo
        "Halito", // Choctaw
        "ᎣᏏᏲ", // Cherokee
        "Aaniin", // Anishinaabemowin
        "Wáa sá i yatee", // Tlingit
        "Pablan", // Inupiaq
        "Sekoh", // Mohawk / Kanien'keha
        "Howa", // Osage
        "Ba'ax ka wa'alik", // Mayan
        "Niltse", // Nahuatl
        "Tanisi", // Cree
        "Hau", // Lakota
        "Hello", // English
        "Hola", // Spanish
      ].map((s) => s + "!")
    ),
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    backDelay: 500,
  };

  React.useEffect(() => {
    if (typedRef.current) {
      new Typed(".typed", options);
    }
  }, [typedRef.current]);

  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>

      <section className="grid grid-cols-1 p-6 md:p-10 md:grid-flow-col md:grid-cols-2">
        <div className="pb-8 md:pb-0">
          <div className="dark:text-nit-white">
            <span className="typed" ref={typedRef} />
          </div>

          <div className="pt-8 md:pt-12">
            <h1 className="text-lg md:text-3xl dark:text-nit-white">
              {f("missionTitle")}
            </h1>
            <p className="pt-2 md:pt-4 md:text-lg dark:text-nit-light-grey text-nit-grey">
              {f("missionBlurb")}
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about" passHref>
              <a href="" className="underline md:text-lg text-nit-primary">
                {f("missionCTAText")}
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <figure>
            <img
              src={assets.primaryImage.src}
              alt={assets.primaryImage.altText}
              width={408}
              height={665}
              className="mb-4 rounded-3xl"
            />
            <figcaption className="text-xs text-center text-nit-grey">
              {" "}
              <span>
                {f("captionText")}{" "}
                <a
                  href="https://unsplash.com/@taylorruecker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline text-nit-primary"
                >
                  Taylor Ruecker
                </a>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  );
}
