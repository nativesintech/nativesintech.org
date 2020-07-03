open Helpers;
open Shared;

module Styles = {
  open Css;

  let banner =
    style([
      backgroundColor(Shared.Colors.pink500),
      textAlign(`center),
      padding(px(12)),
      top(px(0)),
      position(`fixed),
      minWidth(pct(100.0)),
      zIndex(100),
    ]);

  let header =
    style([
      color(hex("fff")),
      display(`inlineBlock),
      Styles.mobile([FontSize.px14]),
    ]);

  let link =
    style([
      color(hex("fff")),
      display(`inlineBlock),
      marginLeft(px(4)),
      borderBottom(px(2), `solid, hex("fff")),
      marginBottom(px(0)),
      lineHeight(`abs(1.25)),
      Styles.mobile([FontSize.px14]),
    ]);

  let buttonColor = Colors.cyan400;

  let button =
    style([
      FontSize.px16,
      border(px(2), `solid, buttonColor),
      textTransform(`uppercase),
      padding2(~h=Spacer.px012, ~v=Spacer.px008),
      marginLeft(Spacer.px008),
      borderRadius(px(3)),
      backgroundColor(buttonColor),
      fontWeight(`bold),
      cursor(`pointer),
      color(hex("fff")),
      Styles.mobile([
        FontSize.px14,
        padding2(~h=Spacer.px008, ~v=Spacer.px008),
      ]),
    ]);
};

[@react.component]
let make = () => {
  <div className=Styles.banner>
    <h3 className=Styles.header> "Natives in Tech Conf is Nov 9th!"->text </h3>
    <PhenomicPresetReactApp.Link href="/conference/2019/">
      <button className=Styles.button> "Details"->text </button>
    </PhenomicPresetReactApp.Link>
  </div>;
};
