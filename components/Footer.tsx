export function Footer() {
  return (
    <footer className="p-10 text-gray-800 grid grid-cols-3 items-center">
      <div />
      <div className="text-center"> Made with ❤️ by Natives in Tech</div>
      <a style={{ justifySelf: "end" }} href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </footer>
  );
}
