import Link from "next/link";
import { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import { useRouter } from "next/router";

export function Header() {
  const [isActive, toggleButton] = useState(false);
  const router = useRouter();

  const routes = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Awesome", route: "/awesome" },
    { title: "Donate", route: "/donate" },
    // { title: "Conference", route: "/conference" },
    {
      title: "Blog",
      route: "https://blog.nativesintech.org",
    },
    {
      title: "Forum",
      route: "https://forum.nativesintech.org",
    },
    {
      title: "Code",
      route: "https://github.com/nativesintech/nativesintech.org",
    },
  ];

  return (
    <>
      <header className="bg-white m-0">
        <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-full m-0 py-8 px-8 md:px-16">
          <div className="flex items-center" style={{ minHeight: 64 }}>
            <Link href="/" passHref>
              <a>
                <img
                  alt="Native in Tech Logo. Mac computer with a feather in the middle."
                  src="computer.svg"
                  className="w-16 mr-4"
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="font-bold text-teal-400 text-2xl hidden md:hidden lg:block">
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

          <ul className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-base w-full md:w-auto mr-0">
            {routes.map((navigationItem) => (
              <li
                className="mt-3 md:mt-0 md:ml-6 text-teal-400 hover:text-teal-500"
                key={navigationItem.title}
              >
                {navigationItem.route.startsWith("https") ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={navigationItem.route}
                  >
                    {navigationItem.title}
                  </a>
                ) : (
                  <Link href={navigationItem.route} passHref>
                    <a
                      className={`hover:text-teal-500 ${
                        router.pathname === navigationItem.route
                          ? "text-teal-800"
                          : "text-teal-400"
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
                        ? "text-teal-400"
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
