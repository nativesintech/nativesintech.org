open Helpers;

module Styles = {
  open Css;

  let billboard =
    style([
      display(`flex),
      alignItems(`center),
      justifyContent(`center),
      flexDirection(`column),
      backgroundColor(Shared.Colors.gray900),
      padding2(~v=Shared.Spacer.px192, ~h=px(0)),
    ]);

  let container = style(Shared.Styles.container);

  let headline =
    style([
      color(Shared.Colors.gray50),
      textAlign(`center),
      ...Shared.Font.size(Shared.Types.Title1),
    ]);

  let tagline =
    style([
      color(Shared.Colors.gray400),
      textAlign(`center),
      ...Shared.Font.size(Shared.Types.Title3),
    ]);

  let header = style(Shared.Font.size(Shared.Types.Title2));

  let text =
    style([maxWidth(`em(30.0)), ...Shared.Font.size(Shared.Types.Text)]);
};

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

    if (LocalStorage.hasCachedConferenceDetails(year)) {
      let details = LocalStorage.getConferenceDetails(year);
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
                 ("timestamp", Js.Json.number(getNextDay())),
                 ("data", encodedConferenceData),
               ]);

             LocalStorage.setConferenceDetails(
               year,
               Js.Json.object_(result),
             );

             let details = LocalStorage.getConferenceDetails(year);

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
        <div className=Styles.billboard>
          <div className=Styles.container>
            <h1 className=Styles.headline>
              "Indigenous Peoples in Digital Spaces"->text
            </h1>
          </div>
          <div className=Styles.tagline> "2019 Conference Details"->text </div>
        </div>
        <div className=Styles.container>
          <h2 className=Styles.header> "Meet the Speakers"->text </h2>
          {switch (self.state.data) {
           | None => "Loading"->text
           | Some(d) =>
             d.data
             |> List.map((speaker: Types.SessionizeAPI.speaker) =>
                  <div> speaker.fullName->text </div>
                )
             |> list
           }}
        </div>
      </Frame>
    </div>;
  },
};

type jsProps = {params};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~params=paramsFromJs(jsProps##params), [||])
  );
