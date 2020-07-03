import * as React from "react";

export function Footer() {
  return (
    <footer className="p-10 text-gray-800 bg-gray-200 grid grid-flow-col grid-row-1 md:grid-cols-3 md:grid-rows-1 items-center">
      <div className="row-span-1 col-span-1" />
      <div
        className="row-span-1 col-span-1 text-center"
        style={{ justifySelf: "center" }}
      >
        {" "}
        Made with ❤️ by Natives in Tech
      </div>
      <a
        className="row-span-1 col-span-1"
        href="https://www.netlify.com"
        style={{ justifySelf: "end" }}
      >
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </footer>
  );
}
