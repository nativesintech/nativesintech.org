let nothing = ReasonReact.null;

let text = ReasonReact.string;

let list = list => list |> Array.of_list |> ReasonReact.array;

let nodeList = node => node##list |> Array.to_list;

let getPage = Js.String.slice(~from=0, ~to_=-3);

let getIdFromYear = year => {
  switch (year) {
  | "2019" => "p3k57cjq"
  | _ => ""
  };
};

let now = () => [%raw {|Date.now()|}];

let dayInMilliseconds = 86400000.0;

let getNextDay = () => now() +. dayInMilliseconds;

module LocalStorage = {
  let hasCachedConferenceDetails = year => {
    Belt.Option.(
      Dom.Storage.(localStorage |> getItem({j|$year|j}))
      ->map(d => {
          let time =
            (
              d
              |> Json.parseOrRaise
              |> Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage
            ).
              timestamp;

          if (time > now()) {
            true;
          } else {
            false;
          };
        })
      ->getWithDefault(false)
    );
  };

  let getConferenceDetails = id => {
    Belt.Option.(
      Dom.Storage.(localStorage |> getItem({j|$id|j}))
      ->map(v =>
          v
          |> Json.parseOrRaise
          |> Decoders.ConferenceDetails.decodeConferenceDetailsFromStorage
        )
    );
  };

  let setConferenceDetails = (id, data) => {
    Dom.Storage.(
      localStorage |> setItem({j|$id|j}, Js.Json.stringify(data))
    );
  };
};
