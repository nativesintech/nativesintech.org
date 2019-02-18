let nothing = ReasonReact.null;

let text = ReasonReact.string;

let couldNotParseErr = "Could not parse";

let list = list => list |> Array.of_list |> ReasonReact.array;

let nodeList = node => node##list |> Array.to_list;

let getPage = Js.String.slice(~from=0, ~to_=-3);

let getIdFromYear = year => {
  switch (year) {
  | "2019" => "p3k57cjq"
  | _ => ""
  };
};

let now = () => Js.Date.now();

let dayInMilliseconds = 86400000.0;

let getNextDay = () => Js.Date.now() +. dayInMilliseconds;

module LocalStorage = {
  let hasCachedConferenceDetails = year => {
    Belt.Option.(
      Dom.Storage.(localStorage |> getItem({j|$year|j}))
      ->flatMap(Json.parse)
      ->map(Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage)
      ->getWithDefault(Belt.Result.Error(couldNotParseErr))
      ->Belt.Result.map(d => {
          let time = d.timestamp;
          time > now();
        })
      ->Belt.Result.getWithDefault(false)
    );
  };

  let getConferenceDetails = id => {
    Belt.Option.(
      Dom.Storage.(localStorage |> getItem({j|$id|j}))
      ->flatMap(Json.parse)
      ->map(Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage)
      ->getWithDefault(Belt.Result.Error(couldNotParseErr))
    );
  };

  let setConferenceDetails = (id, data) => {
    Dom.Storage.(
      localStorage |> setItem({j|$id|j}, Js.Json.stringify(data))
    );
  };
};
