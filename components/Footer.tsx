import * as React from "react";
import { assets } from "../helpers/assets";

export function Footer() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/nativesintech",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/nativesintech",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/natives-in-tech",
    },
    {
      name: "YouTube",
      href:
        "https://www.youtube.com/channel/UCRyR1Jm77K9uVN1QXvoLY6A?view_as=subscriber",
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/r/nativesintech/",
    },
  ];

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
            src={assets.netlify.src}
            alt={assets.netlify.altText}
            style={{ minWidth: 114, minHeight: 51 }}
            width={114}
            height={51}
          />
        </a>
        {links.map((l, i) => {
          return (
            <a
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
          Natives in Tech is a US 501(c)(3) charitable organization, funded by
          individual donations.
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
            style={{ minWidth: 114, minHeight: 51 }}
            width={114}
            height={51}
          />
        </a>
      </div>
    </footer>
  );
}
