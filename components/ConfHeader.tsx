import React from "react";
import Link from "next/link";

export const ConfHeader = ({ year, date }: { year: number; date: string }) => {
  return (
    <div className="p-2 text-center bg-nit-primary dark:text-nit-black text-nit-white">
      Natives in Tech Conf {year} happening on {date}{" "}
      <Link href={`/conference/${year}`} passHref>
        <a href="" className="underline">
          Click here for details
        </a>
      </Link>
    </div>
  );
};
