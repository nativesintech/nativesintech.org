open Helpers;

[@bs.module] external menu: string = "../../../../public/images/hamburger.svg";

[@bs.module]
external logo: string = "../../../../public/images/natives-in-tech-logo.png";
type sidebarState =
  | Open
  | Closed;

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
    style([Shared.FontSize.px24, Shared.Styles.mobile([display(`none)])]);

  let linksBox =
    style([
      display(`flex),
      selector("> a:not(:last-child)", [marginRight(Shared.Spacer.px12)]),
      Shared.Styles.mobile([display(`none)]),
    ]);

  let hamburger =
    style([
      width(px(50)),
      height(px(50)),
      cursor(`pointer),
      Shared.Styles.noMobile([display(`none)]),
    ]);

  let foldOut = (sidebar: sidebarState) => {
    let isSidebarOpen =
      switch (sidebar) {
      | Open => true
      | Closed => false
      };

    let baseStyles = [
      paddingTop(px(20)),
      position(`absolute),
      backgroundColor(Shared.Colors.gray900),
      top(px(0)),
      bottom(px(0)),
      zIndex(10),
      right(px(0)),
      display(`flex),
      flexDirection(`column),
      selector(
        "> .sidelink",
        [
          color(Shared.Colors.gray50),
          padding2(~v=px(10), ~h=px(20)),
          Shared.FontSize.px20,
          cursor(`pointer),
        ],
      ),
    ];

    let animation =
      transition(~duration=300, ~timingFunction=`easeOut, "width");

    let isOpenStyles = style([width(px(200)), animation, ...baseStyles]);

    let isClosedStyles = style([width(px(0)), animation, ...baseStyles]);

    isSidebarOpen ? isOpenStyles : isClosedStyles;
  };
};

type state = {sidebar: sidebarState};

type action =
  | OpenSidebar
  | CloseSidebar;

let component = ReasonReact.reducerComponent(__MODULE__);

let make = _children => {
  ...component,
  initialState: () => {sidebar: Closed},
  reducer: (action, _state) => {
    switch (action) {
    | OpenSidebar => ReasonReact.Update({sidebar: Open})
    | CloseSidebar => ReasonReact.Update({sidebar: Closed})
    };
  },
  render: self => {
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
        <PhenomicPresetReactApp.Link href="/about">
          "About"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link href="/blog">
          "Blog"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link href="/awesome">
          "Awesome"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link href="/conference">
          "Conference"->text
        </PhenomicPresetReactApp.Link>
      </div>
      <span className=Styles.hamburger onClick={_e => self.send(OpenSidebar)}>
        <img src=menu />
      </span>
      <div className={Styles.foldOut(self.state.sidebar)}>
        <PhenomicPresetReactApp.Link className="sidelink" href="/about">
          "About"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link className="sidelink" href="/blog">
          "Blog"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link className="sidelink" href="/awesome">
          "Awesome"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link className="sidelink" href="/conference">
          "Conference"->text
        </PhenomicPresetReactApp.Link>
      </div>
    </nav>;
  },
};
