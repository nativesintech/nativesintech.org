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
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 mx-auto md:px-8 md:py-16  bg-gray-200">
        <h2 className=" my-8 p-3 text-5xl lg:text-6xl text-gray-800 text-center leading-tight">
          Supporting software developers serving Native communities{" "}
        </h2>
        <img src="computer.svg" className="w-64 lg:w-1/4" />
      </div>

      <div className="px-8 py-4">
        <div>
          <span className="typed text-2xl" ref={typedRef} />
        </div>

        <div className="w-1/2 text-2xl">
          <div className="py-4">
            Welcome 👋.{" "}
            <span className="text-teal-500">
              Natives in Tech is a coalition of Native and non-Native software
              developers whose goal is to support software application
              development that reinforces Native beliefs, knowledge, and
              identity
            </span>
            . This is achieved through four initiatives: networking with
            aspiring and experienced developers alike, creating a strong social
            media presence on platforms familiar to developers, hosting a yearly
            Natives in Tech conference, and building open source software that
            Native peoples can use to cultivate healthy online communities.
          </div>

          <div>
            Natives in Tech is a US 501(c)(3) charitable organization, funded by
            individual donations.
          </div>
        </div>
      </div>

      <div className="px-8">Connect With Us!</div>

      <div className="px-8">Ask a Question or Leave a Comment</div>
    </Layout>
  );
}
