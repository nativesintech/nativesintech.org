import * as React from "react";
import { useIntl } from "react-intl";
import { MergedData } from "../content/types";
import { assets } from "../helpers/assets";
import { socialLinksArr } from "../helpers/resources";

export function Footer() {
  const { formatMessage } = useIntl();
  const f = (id: keyof MergedData) => formatMessage({ id });

  return (
    <footer className="flex flex-col p-6 space-y-8 md:p-10 md:items-center md:flex-row md:space-y-0">
      <div className="flex items-center flex-grow mr-4 space-x-4 text-sm md:space-x-6">
        <a
          className="hidden md:inline-block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com"
        >
          <img
            className="min-w-[114px] min-h-[51px]"
            src={assets.netlify.src}
            alt={assets.netlify.altText}
          />
        </a>
        {socialLinksArr.map((l, i) => {
          return (
            <a
              key={`link-${i}`}
              target="_blank"
              rel="noopener noreferrer"
              href={l.href}
              className={`inline-block underline text-nit-primary ${
                i === 0 ? "ml-none" : ""
              }`}
            >
              {l.name}
            </a>
          );
        })}
      </div>
      <div className="flex text-xs md:justify-end">
        <div className="text-nit-grey dark:text-nit-grey">
          {f("nonprofitBlurb")}
        </div>
      </div>
      <div className="md:hidden">
        <a
          className="inline-block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com"
        >
          <img
            src={assets.netlify.src}
            alt={assets.netlify.altText}
            className="min-w-[114px] min-h-[51px]"
          />
        </a>
      </div>
    </footer>
  );
}
