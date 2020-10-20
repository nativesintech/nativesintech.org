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
    // { title: "Awesome", route: "/awesome" },
    { title: "Donate", route: "/donate" },
    {
      title: "Blog",
      route: "https://blog.nativesintech.org",
    },
    {
      title: "Forum",
      route: "https://forum.nativesintech.org",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];

  return (
    <>
      <header>
        <div className="flex flex-wrap items-center justify-between max-w-full px-8 py-8 m-0 md:flex-no-wrap md:px-10">
          <div className="flex items-center" style={{ minHeight: 64 }}>
            {/* <Link href="/" passHref>
              <a>
                <img
                  alt={assets.logo.altText}
                  src={assets.logo.src}
                  className="w-16 mr-4"
                />
              </a>
            </Link> */}
            <Link href="/" passHref>
              <a className="hidden text-lg font-bold md:hidden lg:block text-nit-primary">
                Natives In Tech
              </a>
            </Link>
          </div>
          <div className="flex md:hidden">
            <HamburgerSqueeze
              className="z-40"
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? "#2D3748" : "#FFFFFF"}
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
                      style={{
                        width: 20,
                        height: 20,
                      }}
                      className="text-nit-primary"
                      src={assets.externalLink.src}
                      alt={assets.externalLink.altText}
                    />
                  </span>
                ) : (
                  <Link href={navigationItem.route} passHref>
                    <a
                      className={`underline ${
                        navigationItem.title === "Contact"
                          ? "bg-nit-primary text-nit-white px-4 py-2 text-sm font-bold rounded-md no-underline"
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
        className={`${isActive} fixed z-30 bg-gray-800 h-screen w-1/2 flex flex-col right-0 md:hidden lg:hidden`}
        id="SideMenu"
      >
        <ul className="flex-col mt-16">
          {routes.map((navigationItem) => (
            <li
              className="mt-3 md:mt-0 md:ml-6"
              key={navigationItem.title + "side"}
            >
              {navigationItem.route.startsWith("https") ? (
                <a
                  href={navigationItem.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-4 text-2xl text-white hover:text-teal-500"
                >
                  {navigationItem.title}
                </a>
              ) : (
                <Link href={navigationItem.route} passHref>
                  <a
                    className={`block ml-4 text-2xl ${
                      router.pathname === navigationItem.route
                        ? "text-nit-dark"
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
