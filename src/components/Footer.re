open Helpers;

module Styles = {
  open Css;

  let footer =
    style([
      position(`absolute),
      bottom(px(0)),
      width(`percent(100.0)),
      backgroundColor(Colors.gray900),
      color(Colors.gray50),
      textAlign(`center),
      minHeight(Space.px96),
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
