import React from "react";
import Typed from "typed.js";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { assets } from "../helpers/assets";
import Link from "next/link";

export default function Index() {
  const typedRef = React.createRef<HTMLDivElement>();

  const options = {
    strings: [
      "s@^gaêl", // Euchee/Yuchi
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
      "Hello", // English
    ].map((s) => s + "!"),
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
        <title>Natives technologists supporting Native communities</title>
      </Head>

      <section className="grid grid-flow-col grid-cols-2 p-10">
        <div>
          <div className="dark:text-nit-white">
            <span style={{ fontSize: 78 }} className="typed" ref={typedRef} />
          </div>

          <div className="pt-12">
            <h1 className="text-3xl dark:text-nit-white">Our Mission</h1>
            <p className="pt-4 text-lg dark:text-nit-light-grey text-nit-grey">
              Natives in Tech is a coalition of Native and non-Native
              technologists whose goal is to support technology that reinforces
              Native beliefs, knowledge, and identity.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <a className="text-lg underline text-nit-primary">Learn More</a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-1">
          <img
            className="z-10 col-span-2 col-start-1 row-start-1 place-self-center"
            src={assets.logo.src}
            alt={assets.logo.altText}
            style={{ height: 260 }}
          />
          <img
            src={assets.primaryImage.src}
            alt={assets.primaryImage.altText}
            className="col-span-2 col-start-2 row-start-1 rounded-lg justify-self-end"
            style={{ width: 430 }}
          />
        </div>
      </section>
    </Layout>
  );
}
