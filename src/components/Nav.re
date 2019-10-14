open Helpers;
open Shared;

[@bs.module] external menu: string = "../../../../public/images/hamburger.svg";

[@bs.module]
external logo: string = "../../../../public/images/natives-in-tech-logo.png";

[@bs.module] external close: string = "../../../../public/images/close.svg";

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
      padding2(~h=Spacer.px064, ~v=px(0)),
      minHeight(Spacer.px096),
      boxShadow(
        Shadow.box(
          ~x=px(1),
          ~y=px(0),
          ~blur=px(2),
          ~spread=px(2),
          ~inset=true,
          Colors.gray050,
        ),
      ),
      overflow(`hidden),
      Styles.mobile([padding2(~h=Spacer.px024, ~v=px(0))]),
    ]);

  let logoBox = style([display(`flex), alignItems(`center)]);

  let logoImage = style([marginRight(Spacer.px012)]);

  let orgName =
    style([
      color(Colors.cyan400),
      FontSize.px24,
      Styles.mobile([display(`none)]),
    ]);

  let linksBox =
    style([
      display(`flex),
      selector("> a:not(:last-child)", [marginRight(Spacer.px012)]),
      Styles.mobile([display(`none)]),
    ]);

  let hamburger =
    style([
      width(px(50)),
      height(px(50)),
      cursor(`pointer),
      Styles.noMobile([display(`none)]),
    ]);

  let foldOut = sidebar => {
    let isSidebarOpen =
      switch (sidebar) {
      | Open => true
      | _ => false
      };

    let baseStyles = [
      paddingTop(px(20)),
      position(`absolute),
      backgroundColor(Colors.gray900),
      top(px(0)),
      bottom(px(0)),
      zIndex(10),
      right(px(0)),
      display(`flex),
      overflowX(`hidden),
      flexDirection(`column),
    ];

    let animationWidth =
      transition(~duration=300, ~timingFunction=`easeOut, "width");

    let isOpenStyles =
      style([
        width(px(200)),
        animationWidth,
        selector(
          "> div .sidelink",
          [
            color(Colors.gray050),
            padding2(~v=px(10), ~h=px(20)),
            cursor(`pointer),
            FontSize.px20,
            opacity(1.0),
          ],
        ),
        ...baseStyles,
      ]);

    let isClosedStyles =
      style([
        width(px(0)),
        animationWidth,
        selector(
          "> div .sidelink",
          [
            color(Colors.gray050),
            cursor(`pointer),
            opacity(0.0),
            FontSize.px20,
            opacity(0.0),
          ],
        ),
        ...baseStyles,
      ]);

    isSidebarOpen ? isOpenStyles : isClosedStyles;
  };

  let links =
    style([display(`flex), flexDirection(`column), position(`relative)]);

  let close = sidebar => {
    let isSidebarOpen =
      switch (sidebar) {
      | Open => true
      | _ => false
      };

    let baseStyles = [
      width(px(25)),
      position(`absolute),
      right(Spacer.px012),
      top(px(-8)),
      cursor(`pointer),
    ];

    let openStyles = style([display(`inlineBlock), ...baseStyles]);

    let closedStyles = style([display(`none), ...baseStyles]);

    isSidebarOpen ? openStyles : closedStyles;
  };
};

type state = {sidebar: sidebarState};

type action =
  | OpenSidebar
  | CloseSidebar;

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (_state, action) =>
        switch (action) {
        | OpenSidebar => {sidebar: Open}
        | CloseSidebar => {sidebar: Closed}
        },
      {sidebar: Closed},
    );
  let activeStyle = ReactDOMRe.Style.make(~color="#23c7c5", ());
  <nav className=Styles.navBox>
    <PhenomicPresetReactApp.Link href="/">
      <header className=Styles.logoBox>
        <img className=Styles.logoImage src=logo width="50px" height="50px" />
        <h2 className=Styles.orgName> "Natives in Tech"->text </h2>
      </header>
    </PhenomicPresetReactApp.Link>
    <div className=Styles.linksBox>
      <PhenomicPresetReactApp.Link activeStyle href="/about">
        "About"->text
      </PhenomicPresetReactApp.Link>
      <PhenomicPresetReactApp.Link activeStyle href="/awesome">
        "Awesome"->text
      </PhenomicPresetReactApp.Link>
      <PhenomicPresetReactApp.Link activeStyle href="/conference">
        "Conference"->text
      </PhenomicPresetReactApp.Link>
      <PhenomicPresetReactApp.Link activeStyle href="/blog">
        "Blog"->text
      </PhenomicPresetReactApp.Link>
    </div>
    <span className=Styles.hamburger onClick={_e => dispatch(OpenSidebar)}>
      <img src=menu />
    </span>
    <div className={Styles.foldOut(state.sidebar)}>
      <div className=Styles.links>
        <span
          className={Styles.close(state.sidebar)}
          onClick={_e => dispatch(CloseSidebar)}>
          <img src=close />
        </span>
        <PhenomicPresetReactApp.Link
          className="sidelink" activeStyle href="/about">
          "About"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link
          className="sidelink" activeStyle href="/awesome">
          "Awesome"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link
          className="sidelink" activeStyle href="/conference">
          "Conference"->text
        </PhenomicPresetReactApp.Link>
        <PhenomicPresetReactApp.Link
          className="sidelink" activeStyle href="/blog">
          "Blog"->text
        </PhenomicPresetReactApp.Link>
      </div>
    </div>
  </nav>;
};
