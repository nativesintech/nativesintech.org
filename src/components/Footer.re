open Helpers;

module Styles = {
  open Css;

  let footer =
    style([
      position(`absolute),
      bottom(px(0)),
      width(`percent(100.0)),
      backgroundColor(hex("fbfcfe")),
      borderTop(px(1), `solid, hex("ebf0fa")),
      color(hex("94a2bc")),
      textAlign(`center),
      minHeight(Shared.Spacer.px096),
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
      {j|Made with ❤️by Natives in Tech |j}->text
    </footer>,
};
