import React from "react";
import Typed from "typed.js";
import { Layout } from "../components/Layout";
import { FaSlackHash, FaDiscourse, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

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
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 px-8 md:p-16 bg-gray-200 py-16">
        <h2 className="col-span-2 text-5xl lg:text-6xl text-gray-800 text-center self-center">
          Supporting technologists serving Native communities
        </h2>
        <img
          src="computer.svg"
          className="col-span-1 self-center w-64"
          style={{ justifySelf: "center" }}
        />
      </div>

      <div className="p-8 md:p-16 max-w-screen-lg mx-auto">
        <div style={{ height: 30 }}>
          <span className="typed text-2xl font-bold" ref={typedRef} />
        </div>
        <div className="text-2xl leading-loose">
          <div className="py-4">
            Welcome 👋.{" "}
            <span className="text-teal-500 font-bold">
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
      </div>

      <div className="bg-gray-200 p-16 md:px-16 text-gray-800">
        <p className="text-6xl py-8 text-bold text-center">Connect with us!</p>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-flow-row grid-col-1 row-gap-12 lg:grid-flow-col lg:grid-row-1 py-8 text-teal-500"
        >
          {[
            { Icon: FaSlackHash, url: "https://nativesintech.herokuapp.com/" },
            { Icon: FaDiscourse, url: "https://forum.nativesintech.org/" },
            { Icon: FaGithub, url: "https://github.com/nativesintech" },
            {
              Icon: AiFillTwitterCircle,
              url: "https://twitter.com/nativesintech",
            },
            {
              Icon: FaLinkedin,
              url: "https://www.linkedin.com/company/natives-in-tech",
            },
          ].map(({ Icon, url }) => (
            <a href={url} key={url}>
              <Icon
                style={{ fontSize: 156 }}
                className="self-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </a>
          ))}
        </div>
      </div>

      <form
        action="https://formspree.io/hello@nativesintech.org"
        method="POST"
        className="max-w-screen-md bg-white p-8 md:p-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Ask a question or leave a comment 💬
        </h2>
        <p className="text-2xl text-gray-800 leading-loose">
          We would love to hear from you! Feel free to send a message to{" "}
          <a className="text-teal-400" href="mailto:hello@nativesintech.org">
            hello@nativesintech.org
          </a>{" "}
          or drop us a line below.
        </p>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row">
            <input
              className="input border border-gray-400 appearance-none rounded my-2 md:mr-2 focus focus:shadow-outline active:outline-none active:border-indigo-600 text-xl p-1 flex-auto"
              style={{ textIndent: ".5rem" }}
              placeholder=" Name"
            />
            <input
              className="input border border-gray-400 appearance-none rounded my-2 focus focus:shadow-outline  active:outline-none active:border-indigo-600 text-xl p-1 flex-auto"
              style={{ textIndent: ".5rem" }}
              type="email"
              placeholder=" Email"
            />
          </div>
          <input
            className="input border border-gray-400 appearance-none rounded w-full my-2 pb-16 focus focus:shadow-outline active:outline-none active:border-indigo-600 text-xl p-1"
            style={{ textIndent: ".5rem" }}
            placeholder=" Message"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-teal-500 border-2 border-teal-500"
        >
          SUBMIT
        </button>
      </form>
    </Layout>
  );
}
