open Helpers;

module Styles = {
  open Css;

  let footer =
    style([
      position(`absolute),
      bottom(px(0)),
      width(`percent(100.0)),
      backgroundColor(Shared.Colors.gray900),
      color(Shared.Colors.gray50),
      textAlign(`center),
      minHeight(Shared.Spacer.px96),
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
