let component = ReasonReact.statelessComponent(__MODULE__);

let make = _children => {
  ...component,
  render: _self =>
    ReactDOMRe.createElementVariadic(
      "div",
      ~props=
        ReactDOMRe.objToDOMProps({
          "style": {
            "marginTop": "10px",
          },
          "className": "g-recaptcha",
          "data-sitekey": "6LcmQIcUAAAAAKq2n0zU9CzU5s141Ni_R5lRQzhz",
        }),
      [||],
    ),
};
