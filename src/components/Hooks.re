open Helpers;

type state = {data: RemoteData.t(string, Types.ConferenceDetails.details)};

type action =
  | UpdateDetails(RemoteData.t(string, Types.ConferenceDetails.details));

let useConferenceData = (year: string) => {
  let id = getIdFromYear(year);

  let (state, dispatch) =
    React.useReducer(
      (_state, action) =>
        switch (action) {
        | UpdateDetails(result) => {data: result}
        },
      {data: RemoteData.NotAsked},
    );

  React.useEffect0(() => {
    dispatch(UpdateDetails(RemoteData.Loading));

    if (LocalStorage.hasCachedConferenceDetails(year)) {
      let details =
        LocalStorage.getConferenceDetails(year) |> RemoteData.fromResult;
      dispatch(UpdateDetails(details));
    } else {
      Js.Promise.(
        Fetch.fetch({j|https://sessionize.com/api/v2/$id/view/speakers|j})
        |> then_(res =>
             if (Fetch.Response.ok(res)) {
               Fetch.Response.text(res);
             } else {
               dispatch(UpdateDetails(RemoteData.Failure("Bad status")));
               reject(Js.Exn.raiseError("Bad status"));
             }
           )
        |> then_(text => {
             let encodedConferenceData =
               Belt.Option.(
                 text
                 ->Json.parse
                 ->map(v =>
                     v
                     ->Decoders.SessionizeAPI.decodeResponse
                     ->Belt.Result.map(
                         Encoders.LocalStorage.encodeConferenceData,
                       )
                     ->Belt.Result.getWithDefault(Js.Json.string(""))
                   )
                 ->getWithDefault(Js.Json.string(""))
               );

             let result =
               Js.Dict.fromList([
                 ("timestamp", Js.Json.number(getNextDay())),
                 ("data", encodedConferenceData),
               ]);

             LocalStorage.setConferenceDetails(
               year,
               Js.Json.object_(result),
             );

             let details =
               LocalStorage.getConferenceDetails(year)
               |> RemoteData.fromResult;

             dispatch(UpdateDetails(details));
             resolve();
           })
        |> catch(_ => {
             dispatch(UpdateDetails(RemoteData.Failure("Network error")));
             resolve();
           })
      )
      |> ignore;
    };
    None;
  });

  (state, dispatch);
};
