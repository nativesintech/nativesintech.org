let component = ReasonReact.statelessComponent(__MODULE__);

let make = children => {
  ...component,
  render: _self => <div> <Nav /> <main> ...children </main> <Footer /> </div>,
};
