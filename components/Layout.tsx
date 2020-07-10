import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
  title: string;
};

export function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">{props.children}</main>
      <Footer />
    </div>
  );
}
