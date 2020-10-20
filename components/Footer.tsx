import * as React from "react";
import { assets } from "../helpers/assets";

export function Footer() {
  return (
    <footer className="flex items-center p-10">
      <div className="flex items-center flex-grow space-x-6 text-sm">
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
          className="inline-block underline text-nit-primary"
        >
          Slack
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nativesintech"
          className="inline-block underline text-nit-primary"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/nativesintech"
          className="inline-block underline text-nit-primary"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/natives-in-tech"
          className="inline-block underline text-nit-primary"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex justify-end text-xs">
        <div className="text-nit-grey dark:text-nit-grey">
          Natives in Tech is a US 501(c)(3) charitable organization, funded by
          individual donations.
        </div>
      </div>
    </footer>
  );
}
