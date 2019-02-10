open Helpers;

[@bs.deriving jsConverter]
type params = {year: string};

type state = {data: option(Types.ConferenceDetails.details)};

type action =
  | UpdateDetails(option(Types.ConferenceDetails.details));

let component = ReasonReact.reducerComponent(__MODULE__);

let make = (~params, _children) => {
  ...component,
  initialState: () => {data: None},
  didMount: self => {
    let {year} = params;
    let id = getIdFromYear(year);

    if (Utils.Storage.hasCachedConferenceDetails(year)) {
      Js.log("getting data from local storage");
      let details = Utils.Storage.getConferenceDetails(year);
      self.send(UpdateDetails(details));
    } else {
      Js.Promise.(
        Fetch.fetch({j|https://sessionize.com/api/v2/$id/view/speakers|j})
        |> then_(Fetch.Response.text)
        |> then_(text => {
             let result =
               text
               |> Json.parseOrRaise
               |> Decoders.SessionizeAPI.decodeResponse;

             let encodedConferenceData =
               Encoders.LocalStorage.encodeConferenceData(result);

             let result =
               Js.Dict.fromList([
                 ("timestamp", Js.Json.number(Utils.Storage.getNextDay())),
                 ("data", encodedConferenceData),
               ]);

             Utils.Storage.setConferenceDetails(
               year,
               Js.Json.object_(result),
             );

             let details = Utils.Storage.getConferenceDetails(year);

             self.send(UpdateDetails(details));

             Js.Promise.resolve();
           })
        |> catch(_e =>
             Js.Exn.raiseError("There were an error in the promise")
           )
      )
      |> ignore;
    };
    ();
  },
  reducer: (action, _state) => {
    switch (action) {
    | UpdateDetails(result) => ReasonReact.Update({data: result})
    };
  },
  render: self => {
    <div>
      <Frame>
        {switch (self.state.data) {
         | None => "Something went terribly wrong..."->text
         | Some(d) =>
           d.data
           |> List.map((speaker: Types.SessionizeAPI.speaker) =>
                <div> speaker.fullName->text </div>
              )
           |> list
         }}
      </Frame>
    </div>;
  },
};

type jsProps = {params};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~params=paramsFromJs(jsProps##params), [||])
  );
