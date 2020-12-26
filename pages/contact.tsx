import React from "react";
import Head from "next/head";

import { Layout } from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Natives in Tech - Contact</title>
      </Head>
      <section>
        <form
          action="https://formspree.io/f/xdopzbqz"
          method="POST"
          className="max-w-screen-md px-6 m-auto"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl dark:text-nit-white">
            Contact
          </h2>
          <p className="dark:text-nit-light-grey text-nit-grey">
            We would love to hear from you! Feel free to send a message to{" "}
            <a
              className="underline text-nit-primary"
              href="mailto:hello@nativesintech.org"
            >
              hello@nativesintech.org
            </a>{" "}
            or drop us a line below.
          </p>
          <div className="mt-6 mb-4">
            <div className="flex flex-col mb-4 space-y-4 md:space-y-0 md:mb-0 md:flex-row">
              <div className="flex-auto md:mr-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  style={{ textIndent: ".5rem" }}
                  name="name"
                  placeholder="Name"
                  className="w-full p-1 my-2 text-xl border rounded appearance-none border-nit-grey dark:bg-nit-black dark:text-nit-light-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
                />
              </div>
              <div className="flex-auto">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
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
                  className="w-full p-1 my-2 text-xl border rounded appearance-none dark:bg-nit-black dark:text-nit-light-grey border-nit-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
              >
                Message
              </label>
              <textarea
                id="message"
                style={{ textIndent: ".5rem" }}
                name="message"
                placeholder="Message"
                className="w-full p-1 pb-16 my-2 text-xl border rounded appearance-none dark:text-nit-light-grey dark:bg-nit-black border-nit-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            value="Send"
            className="px-6 py-3 font-bold rounded bg-nit-dark text-nit-white focus:shadow-outline"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </Layout>
  );
}
