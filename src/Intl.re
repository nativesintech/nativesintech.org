type t;

[@bs.send.pipe: t] external format: Js.Date.t => string = "";

[@bs.deriving abstract]
type options = {
  year: string,
  month: string,
  day: string,
};

[@bs.new]
external mkDateTimeFormat: (string, options) => t = "Intl.DateTimeFormat";

let formatUSDate = str =>
  mkDateTimeFormat(
    "en-US",
    options(~year="numeric", ~month="long", ~day="numeric"),
  )
  |> format(Js.Date.fromString(str));
