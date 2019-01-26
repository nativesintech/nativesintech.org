module Styles = {
  open Css;

  let container = [
    padding2(~h=Space.px64, ~v=Space.px48),
    media("(max-width: 600px)", [padding2(~h=Space.px24, ~v=Space.px48)]),
  ];
};
