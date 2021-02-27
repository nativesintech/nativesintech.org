import Link from "next/link";
import { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import { useRouter } from "next/router";
import { assets } from "../helpers/assets";

export function Header() {
  const [isActive, toggleButton] = useState(false);
  const router = useRouter();

  const routes = [
    { title: "About", route: "/about" },
    { title: "Conf", route: "/conference" },
    { title: "Donate", route: "/donate" },
    { title: "Community", route: "/community" },
    { title: "Projects", route: "/projects" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <>
      <header>
        <div className="flex flex-wrap items-center justify-between max-w-full px-6 py-8 m-0 md:px-10 md:flex-no-wrap">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a
                href=""
                className="text-lg font-bold lg:block text-nit-primary"
              >
                Natives In Tech
              </a>
            </Link>
          </div>
          <div className="flex md:hidden">
            <HamburgerSqueeze
              buttonWidth={30}
              className="z-40"
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? "#c69662" : "#FFFFFF"}
            />
          </div>

          <ul className="flex-col hidden w-full mr-0 text-base md:flex md:flex-row md:items-center md:justify-center md:w-auto">
            {routes.map((navigationItem) => (
              <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
                {navigationItem.route.startsWith("https") ? (
                  <span className="flex items-center text-sm cursor-pointer">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-2 underline text-nit-primary"
                      href={navigationItem.route}
                    >
                      {navigationItem.title}
                    </a>
                    <img
                      width={20}
                      height={20}
                      src={assets.externalLink.src}
                      alt={assets.externalLink.altText}
                    />
                  </span>
                ) : (
                  <Link href={navigationItem.route} passHref>
                    <a
                      href=""
                      className={`underline ${
                        navigationItem.title === "Contact"
                          ? "bg-nit-dark text-nit-white px-4 py-2 text-sm font-bold rounded-md no-underline"
                          : "text-nit-primary text-sm leading-tight"
                      } `}
                    >
                      {navigationItem.title}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div
        className={`${isActive} fixed z-30 bg-nit-black h-screen w-1/2 flex flex-col right-0 md:hidden lg:hidden`}
        id="SideMenu"
      >
        <ul className="flex-col mt-16">
          {routes.map((navigationItem) => (
            <li
              className="mt-3 md:mt-0 md:ml-6"
              key={navigationItem.title + "side"}
            >
              {navigationItem.route.startsWith("https") ? (
                <span className="flex flex-row items-center">
                  <a
                    href={navigationItem.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block ml-4 mr-2 text-xl text-white"
                  >
                    {navigationItem.title}
                  </a>
                  <img
                    width={20}
                    height={20}
                    src={assets.externalLink.src}
                    alt={assets.externalLink.altText}
                  />
                </span>
              ) : (
                <Link href={navigationItem.route} passHref>
                  <a
                    href=""
                    className={`block ml-4 text-xl ${
                      router.pathname === navigationItem.route
                        ? "text-nit-primary"
                        : "text-white"
                    }`}
                  >
                    {navigationItem.title}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
