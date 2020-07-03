open Helpers;
open Shared;

module Styles = {
  open Css;

  let footer =
    style([
      position(`absolute),
      bottom(px(0)),
      width(`percent(100.0)),
      backgroundColor(Colors.gray050),
      borderTop(px(1), `solid, Colors.gray100),
      color(Colors.gray900),
      textAlign(`center),
      minHeight(Spacer.px096),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
    ]);

  let netlify = style([marginLeft(px(4))]);
};

[@react.component]
let make = () => {
  <footer className=Styles.footer>
    {j|Made with ❤️ by Natives in Tech & |j}->text
    <a className=Styles.netlify href="https://www.netlify.com">
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
      />
    </a>
  </footer>;
};
