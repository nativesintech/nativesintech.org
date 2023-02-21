import React from "react";
import Head from "next/head";

import { Layout } from "../components/Layout";
import { useIntl } from "react-intl";
import { ComponentKeys } from "../content/types";
import { convertEmailToLink, convertStrToJsx } from "../helpers/convertStr";

export default function Contact() {
  const { formatMessage } = useIntl();
  const f = (id: ComponentKeys<"/contact">) => formatMessage({ id });

  const convertBlurb = convertStrToJsx(convertEmailToLink);

  return (
    <Layout>
      <Head>
        <title>{f("title")}</title>
      </Head>
      <section>
        <form
          action="https://formspree.io/f/xdopzbqz"
          method="POST"
          className="section"
        >
          <h1 className="h1">{f("h1")}</h1>
          {convertBlurb(f("blurb"))}
          <div className="mt-6 mb-4">
            <div className="flex flex-col mb-4 space-y-4 md:space-y-0 md:mb-0 md:flex-row">
              <div className="flex-auto md:mr-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
                >
                  {f("name")}
                </label>
                <input
                  id="name"
                  type="text"
                  style={{ textIndent: ".5rem" }}
                  name="name"
                  placeholder={f("name")}
                  className="w-full p-1 my-2 text-xl border rounded appearance-none border-nit-grey dark:bg-nit-black dark:text-nit-light-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
                />
              </div>
              <div className="flex-auto">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
                >
                  {f("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  style={{ textIndent: ".5rem" }}
                  name="_replyto"
                  placeholder={f("email")}
                  className="w-full p-1 my-2 text-xl border rounded appearance-none dark:bg-nit-black dark:text-nit-light-grey border-nit-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-xs font-bold tracking-wide uppercase dark:text-nit-light-grey"
              >
                {f("message")}
              </label>
              <textarea
                id="message"
                style={{ textIndent: ".5rem" }}
                name="message"
                placeholder={f("message")}
                className="w-full p-1 pb-16 my-2 text-xl border rounded appearance-none dark:text-nit-light-grey dark:bg-nit-black border-nit-grey input focus focus:shadow-outline active:outline-none active:border-nit-light-grey"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            value="Send"
            className="px-6 py-3 font-bold rounded bg-nit-dark text-nit-white focus:shadow-outline"
          >
            {f("submit")}
          </button>
        </form>
      </section>
    </Layout>
  );
}
