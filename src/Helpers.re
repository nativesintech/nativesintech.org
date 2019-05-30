let nothing = React.null;

let text = React.string;

let couldNotParseErr = "Could not parse";

let list = list => list->Belt.List.toArray->React.array;

let nodeList = node => node##list->Belt.List.fromArray;

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
      ->mapWithDefault(
          Belt.Result.Error(couldNotParseErr),
          Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage,
        )
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
      ->mapWithDefault(
          Belt.Result.Error(couldNotParseErr),
          Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage,
        )
    );
  };

  let setConferenceDetails = (id, data) => {
    Dom.Storage.(
      localStorage |> setItem({j|$id|j}, Js.Json.stringify(data))
    );
  };
};
