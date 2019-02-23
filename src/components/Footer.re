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
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = _children => {
  ...component,
  render: _self =>
    <footer className=Styles.footer>
      {j|Made with ❤️ by Natives in Tech |j}->text
    </footer>,
};
