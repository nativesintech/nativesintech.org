open Shared;

module Styles = {
  open Css;

  let container = style([minHeight(`percent(100.0)), position(`relative)]);
  let main = style([paddingBottom(Spacer.px096)]);
};

[@react.component]
let make = (~children) => {
  <div className=Styles.container>
    <Nav />
    <main className=Styles.main> children </main>
    <Footer />
  </div>;
};
