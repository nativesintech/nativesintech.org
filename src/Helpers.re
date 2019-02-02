let nothing = ReasonReact.null;

let text = ReasonReact.string;

let list = list => list |> Array.of_list |> ReasonReact.array;

let nodeList = node => node##list |> Array.to_list;

let getPage = Js.String.slice(~from=0, ~to_=-3);
