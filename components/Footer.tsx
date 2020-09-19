import * as React from "react";
import { assets } from "../helpers/assets";

export function Footer() {
  return (
    <footer className="grid items-center grid-flow-col p-10 grid-row-1 md:grid-cols-2 md:grid-rows-1">
      <div className="col-span-1 space-x-8">
        <a
          className="inline-block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com"
        >
          <img src={assets.netlify.src} alt={assets.netlify.altText} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nativesintech.herokuapp.com/"
          className="underline text-nit-primary"
        >
          Slack
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nativesintech"
          className="underline text-nit-primary"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/nativesintech"
          className="underline text-nit-primary"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/natives-in-tech"
          className="underline text-nit-primary"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <div className="text-nit-grey dark:text-nit-light-grey">
          Natives in Tech is a US 501(c)(3) charitable organization, funded by
          individual donations.
        </div>
      </div>
    </footer>
  );
}
