import Typed from "typed.js";
import { Layout } from "../components/Layout";

  const typedRef = React.createRef<HTMLDivElement>();

  const options = {
    strings: [
      "s@^gaêl", // Euchee/Yuchi
      "Hesci", // Muscogee (Creek) / Seminole
      "Yá'át'ééh", // Navajo
      "Halito", // Choctaw
      "ᎣᏏᏲ", // Cherokee
      "Aaniin", // Anishinaabemowin
      "Wáa sá i yatee", // Tlingit
      "Pablan", // Inupiaq
      "Sekoh", // Mohawk / Kanien'keha
      "Howa", // Osage
      "Ba'ax ka wa'alik", // Mayan
      "Niltse", // Nahuatl
      "Tanisi", // Cree
      "Hello", // English
    ].map((s) => s + "!"),
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    backDelay: 500,
  };

  React.useEffect(() => {
    if (typedRef.current) {
      new Typed(".typed", options);
    }
  }, [typedRef.current]);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-8">
        <h2 className=" my-8 p-3 text-5xl lg:text-6xl text-gray-800 text-center leading-tight">
          Supporting software developers serving Native communities{" "}
        </h2>
        <img src="computer.svg" className="w-64 lg:w-1/4" />
      </div>
        <div>
          <span className="typed text-2xl" ref={typedRef} />
        </div>

    </Layout>
  );
}
