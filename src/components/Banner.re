open Helpers;

module Styles = {
  open Css;

  let banner =
    style([
      backgroundColor(Shared.Colors.pink500),
      textAlign(`center),
      padding(px(12)),
    ]);

  let header = style([color(hex("fff")), display(`inlineBlock)]);

  let link =
    style([
      color(hex("fff")),
      display(`inlineBlock),
      marginLeft(px(4)),
      borderBottom(px(2), `solid, hex("fff")),
      marginBottom(px(0)),
      lineHeight(`abs(1.25)),
    ]);
};

[@react.component]
let make = () => {
  <div className=Styles.banner>
    <h3 className=Styles.header>
      "Natives in Tech Conf is November 9th!"->text
    </h3>
    <PhenomicPresetReactApp.Link href="/conference/2019/">
      <h3 className=Styles.link> "Click here for details"->text </h3>
    </PhenomicPresetReactApp.Link>
  </div>;
};
