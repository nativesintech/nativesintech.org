import { Header } from "./Header";
import { Footer } from "./Footer";
import { Offline } from "react-detect-offline";
// import Link from "next/link";
// import { ConfHeader } from "./ConfHeader";

type Props = {
  children: React.ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-nit-black bg-nit-white">
      <Offline>
        <div className="p-2 text-center bg-nit-primary dark:text-nit-black text-nit-white">
          You are viewing this site offline. Some images may not render.
        </div>
      </Offline>
      {/* <ConfHeader year={2023} date="Friday, Dec. 8th 2023" /> */}
      <Header />
      <main className="flex-1 w-full">{props.children}</main>
      <Footer />
    </div>
  );
}
