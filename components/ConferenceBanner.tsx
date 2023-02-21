import Link from "next/link";

interface Props {
  year: string;
}

export function ConferenceBanner(props: Props) {
  return (
    <div className="p-2 text-center bg-nit-primary dark:text-nit-black text-nit-white">
      Natives in Tech Conf {props.year} is just around the corner!{" "}
      <Link href={`/conference/${props.year}`} passHref>
        <a href="" className="underline">
          Click here for details
        </a>
      </Link>
    </div>
  );
}
