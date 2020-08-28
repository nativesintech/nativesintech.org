import React from "react";
import Typed from "typed.js";
import { Layout } from "../components/Layout";
import { FaSlackHash, FaDiscourse, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Head from "next/head";
import { assets } from "../helpers/assets";

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
      <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 px-8 md:p-16 bg-gray-200 py-16">
        <h1 className="col-span-2 text-5xl lg:text-6xl text-center self-center">
          Native technologists supporting Native communities
        </h1>
        <img
          alt={assets.logo.altText}
          src={assets.logo.src}
          className="col-span-1 self-center w-64"
          style={{ justifySelf: "center", minHeight: 256 }}
        />
      </section>

      <section className="p-8 md:p-16 max-w-screen-lg mx-auto">
        <div style={{ height: 30 }}>
          <span className="typed text-2xl font-bold" ref={typedRef} />
        </div>
        <div className="prose prose-2xl">
          <div className="py-4">
            Welcome 👋.{" "}
            <span className="text-nit-dark font-bold">
              Natives in Tech is a coalition of Native and non-Native
              technologists whose goal is to support technology that reinforces
              Native beliefs, knowledge, and identity
            </span>
            . This is achieved through four initiatives: networking with
            aspiring and experienced technologists alike, creating a strong
            social media presence on platforms familiar to technologists,
            hosting a yearly Natives in Tech conference, and building open
            source technology that Native peoples can use to cultivate healthy
            online communities.
          </div>

          <div>
            Natives in Tech is a US 501(c)(3) charitable organization, funded by
            individual donations.
          </div>
        </div>
      </section>

      <section className="bg-gray-200 p-16 md:px-16">
        <p className="text-6xl py-8 text-bold text-center">Connect with Us!</p>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-flow-row grid-col-1 row-gap-12 lg:grid-flow-col lg:grid-row-1 py-8"
        >
          {[
            {
              Icon: FaSlackHash,
              url: "https://nativesintech.herokuapp.com/",
              label: "Slack Logo",
            },
            {
              Icon: FaDiscourse,
              url: "https://forum.nativesintech.org/",
              label: "Discourse Logo",
            },
            {
              Icon: FaGithub,
              url: "https://github.com/nativesintech",
              label: "GitHub Logo",
            },
            {
              Icon: AiFillTwitterCircle,
              url: "https://twitter.com/nativesintech",
              label: "Twitter Logo",
            },
            {
              Icon: FaLinkedin,
              url: "https://www.linkedin.com/company/natives-in-tech",
              label: "LinkedIn Logo",
            },
          ].map(({ Icon, url, label }) => (
            <a href={url} key={url} aria-label={label}>
              <Icon className="self-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 icons" />
            </a>
          ))}
        </div>
      </section>

      <section>
        <form
          action="https://formspree.io/hello@nativesintech.org"
          method="POST"
          className="max-w-screen-md bg-white p-8 md:p-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ask a question or leave a comment 💬
          </h2>
          <p className="prose prose-2xl">
            We would love to hear from you! Feel free to send a message to{" "}
            <a
              className="hover:text-nit-earth"
              href="mailto:hello@nativesintech.org"
            >
              hello@nativesintech.org
            </a>{" "}
            or drop us a line below.
          </p>
          <div className="mb-4 mt-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-auto md:mr-2">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  style={{ textIndent: ".5rem" }}
                  name="name"
                  placeholder="Name"
                  className="input border border-gray-400 appearance-none rounded my-2 focus focus:shadow-outline active:outline-none active:border-indigo-600 text-xl p-1 w-full"
                />
              </div>
              <div className="flex-auto">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-xs font-bold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  style={{ textIndent: ".5rem" }}
                  name="_replyto"
                  placeholder="Email"
                  className="input border border-gray-400 appearance-none rounded my-2 focus focus:shadow-outline  active:outline-none active:border-indigo-600 text-xl p-1 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                style={{ textIndent: ".5rem" }}
                name="message"
                placeholder="Message"
                className="input border border-gray-400 appearance-none rounded w-full my-2 pb-16 focus focus:shadow-outline active:outline-none active:border-indigo-600 text-xl p-1"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            value="Send"
            className="text-nit-earth font-bold py-3 px-6 rounded hover:bg-white border-2 border-nit-earth"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </Layout>
  );
}
