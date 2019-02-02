open Helpers;

[@bs.module]
external logo: string = "../../../../public/images/natives-in-tech-logo.png";

module Styles = {
  open Css;

  let navBox =
    style([
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
      padding2(~h=Shared.Spacer.px64, ~v=px(0)),
      minHeight(Shared.Spacer.px96),
      borderBottom(px(1), `solid, Shared.Colors.gray300),
      Shared.Styles.mobile([padding2(~h=Shared.Spacer.px24, ~v=px(0))]),
    ]);

  let logoBox = style([display(`flex), alignItems(`center)]);

  let logoImage = style([marginRight(Shared.Spacer.px12)]);

  let orgName =
    style([
      Shared.FontSize.px24,
      Shared.Styles.mobile([display(`none)]),
    ]);

  let linksBox =
    style([
      display(`flex),
      selector("> a:not(:last-child)", [marginRight(Shared.Spacer.px12)]),
    ]);
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = _children => {
  ...component,
  render: _self =>
    <nav className=Styles.navBox>
      <PhenomicPresetReactApp.Link href="/">
        <header className=Styles.logoBox>
          <img
            className=Styles.logoImage
            src=logo
            width="50px"
            height="50px"
          />
          <h2 className=Styles.orgName> "Natives in Tech"->text </h2>
        </header>
      </PhenomicPresetReactApp.Link>
      <div className=Styles.linksBox>
        <PhenomicPresetReactApp.Link href="/">
          "Home"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link href="/about">
          "About"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link href="/blog">
          "Blog"->text
        </PhenomicPresetReactApp.Link>
      </div>
    </nav>,
};
