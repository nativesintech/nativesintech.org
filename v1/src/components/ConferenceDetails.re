open Helpers;
open Shared;

module Styles = {
  open Css;

  let billboard =
    style([
      textAlign(`center),
      backgroundColor(Colors.gray050),
      borderBottom(px(1), `solid, Colors.gray100),
      padding2(~v=Spacer.px192, ~h=Spacer.px064),
      marginBottom(Spacer.px064),
      boxShadow(
        Shadow.box(
          ~y=px(1),
          ~blur=px(1),
          ~spread=px(1),
          ~inset=true,
          Colors.gray100,
        ),
      ),
      Styles.mobile([
        padding2(~v=Spacer.px128, ~h=Spacer.px024),
        marginBottom(Spacer.px048),
      ]),
    ]);

  let container = style(Styles.container);

  let headline = style(Font.size(FontTypes.Title1));

  let tagline =
    style([
      color(Colors.gray500),
      marginTop(Spacer.px024),
      FontSize.px24,
      Styles.mobile([FontSize.px20]),
    ]);

  let header =
    style([marginBottom(Spacer.px064), ...Font.size(FontTypes.Title2)]);

  let text = style([maxWidth(`em(30.0)), ...Font.size(FontTypes.Text)]);

  let speaker =
    style([
      display(`flex),
      marginBottom(px(100)),
      Styles.mobile([flexDirection(`column)]),
    ]);

  let image =
    style([
      borderRadius(px(2)),
      overflow(`hidden),
      minWidth(px(200)),
      maxHeight(px(200)),
      maxWidth(px(200)),
      maxHeight(px(200)),
    ]);

  let details =
    style([
      display(`flex),
      flexDirection(`column),
      paddingLeft(Spacer.px024),
      Styles.mobile([padding2(~v=Spacer.px024, ~h=px(0))]),
    ]);

  let name =
    style([
      color(Colors.gray800),
      marginBottom(Spacer.px008),
      ...Font.size(Title3),
    ]);

  let session =
    style([
      fontWeight(`medium),
      FontSize.px18,
      color(Colors.gray500),
      lineHeight(`abs(1.75)),
    ]);

  let bio =
    style([
      fontWeight(`light),
      FontSize.px20,
      margin2(~v=Spacer.px008, ~h=px(0)),
    ]);
};

type state = {data: RemoteData.t(string, Types.ConferenceDetails.details)};

type action =
  | UpdateDetails(RemoteData.t(string, Types.ConferenceDetails.details));

[@react.component]
let make = (~params) => {
  let year = params##splat;

  let (state, _dispatch) = Hooks.useConferenceData(year);

  <div>
    <BsReactHelmet>
      <title> {j|Natives in Tech Conf $year|j}->text </title>
      <meta
        name="description"
        content={j|Details about the Natives in Tech Conference|j}
      />
      <meta
        name="keywords"
        content="natives in tech, natives, indigenous, tech, software development, open source, conference"
      />
      <meta name="twitter:title" content={j|Natives in Tech Conf $year|j} />
      <meta
        name="twitter:description"
        content={j|Details about the Natives in Tech Conference of $year|j}
      />
      <meta property="og:title" content={j|Natives in Tech Conf $year|j} />
      <meta
        property="og:description"
        content={j|Details about the Natives in Tech Conference|j}
      />
      <meta
        property="og:url"
        content={j|https://nativesintech.org/conference/$year/|j}
      />
    </BsReactHelmet>
    <Frame>
      <div className=Styles.billboard>
        <h1 className=Styles.headline>
          "Indigenous Peoples in Digital Spaces"->text
        </h1>
        <div className=Styles.tagline>
          "November 2019 Conference Details"->text
        </div>
      </div>
      <div className=Styles.container>
        <h2> "Date and Time"->text </h2>
        <p> "Date: November 9th, 2019"->text </p>
        <p> "Time: 9am CDT to 6pm CDT"->text </p>
        <h2> "Watch Live"->text </h2>
        <p>
          "The conference is being live streamed on Twitch.tv. You can watch using this link: "
          ->text
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.twitch.tv/events/d-_b2HzaRAu4aGpoeZvF-g">
            "Natives in Tech Conf Livestream"->text
          </a>
          <span> "."->text </span>
        </p>
        <h2> "Schedule"->text </h2>
        <p>
          "You can find the schedule for the event using this link: "->text
          <a
            href="https://docs.google.com/spreadsheets/d/14nJGMDhA23tDn3l3QGVKe_yWMmUHrYyxz-5AL_gGahQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            "Natives in Tech Conf Schedule"->text
          </a>
          <span> "."->text </span>
        </p>
        <h2 className=Styles.header> "Meet the Speakers"->text </h2>
        {switch (state.data) {
         | NotAsked => nothing
         | Loading => "Loading..."->text
         | Failure(e) => {j|Sorry, there was an error: $e|j}->text
         | Success(d) =>
           d.data
           ->Belt.List.map(speaker => {
               let firstSessionName =
                 Belt.Option.(
                   Belt.List.head(speaker.sessions)
                   ->map(s => s.name)
                   ->getWithDefault("")
                 );

               <div className=Styles.speaker>
                 <img className=Styles.image src={speaker.profilePicture} />
                 <div className=Styles.details>
                   <div className=Styles.name> speaker.fullName->text </div>
                   <div className=Styles.session> firstSessionName->text </div>
                   <p className=Styles.bio> speaker.bio->text </p>
                 </div>
               </div>;
             })
           |> list
         }}
      </div>
    </Frame>
  </div>;
};

let queries = props => {
  let conference =
    PhenomicPresetReactApp.query(
      Item({path: "content/conferences", id: props##params##splat}),
    );
  {"conference": conference};
};
