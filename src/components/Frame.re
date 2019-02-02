let component = ReasonReact.statelessComponent(__MODULE__);

module Styles = {
  open Css;

  let container = style([minHeight(`percent(100.0)), position(`relative)]);
  let main = style([paddingBottom(Shared.Spacer.px96)]);
};

let make = children => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      <Nav />
      <main className=Styles.main> ...children </main>
      <Footer />
    </div>,
};
