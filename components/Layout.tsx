import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header href="" />

      <main className="flex-1 w-full">{props.children}</main>
      <Footer />
    </div>
  );
}
