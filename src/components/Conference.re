open Helpers;
open Shared.Types;

[@bs.module]
external checkmark: string = "../../../../public/images/checkmark.svg";

module Styles = {
  open Css;

  let container = style(Shared.Styles.container);

  let content = style(Shared.Styles.content);

  let header1 = style(Shared.Font.size(Title1));

  let header2 = style(Shared.Font.size(Title2));

  let text = style(Shared.Font.size(Text));

  let points =
    style([
      display(`flex),
      alignItems(`center),
      marginLeft(Shared.Spacer.px32),
      lineHeight(`abs(1.25)),
      ...Shared.Font.size(Text),
    ]);

  let icon =
    style([
      width(px(30)),
      height(px(30)),
      marginRight(Shared.Spacer.px12),
      Shared.Styles.mobile([width(px(20)), height(px(20))]),
    ]);
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = _children => {
  ...component,

  render: _self =>
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Conference"->text </title>
        <meta
          name="description"
          content="Information about the Natives in Tech Conference"
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source, conference"
        />
        <meta name="twitter:title" content="Natives in Tech Conference" />
        <meta
          name="twitter:description"
          content="Information about the Natives in Tech Conference"
        />
        <meta property="og:title" content="Natives in Tech Conference" />
        <meta
          property="og:description"
          content="Information about the Natives in Tech Conference"
        />
        <meta
          property="og:url"
          content="http://nativesintech.org/conference/"
        />
      </BsReactHelmet>
      <Frame>
        <div className=Styles.container>
          <div className=Styles.content>
            <h1 className=Styles.header1>
              {j|Indigenous Peoples in Digital Spaces|j}->text
            </h1>
            <h2 className=Styles.header2>
              {j|November 9th , 2018 - Location TBD|j}->text
            </h2>
            <p className=Styles.text>
              "The Natives in Tech Conference brings together Native and non-Native developers to share projects that empower and support Native communties around the world."
              ->text
            </p>
            <p className=Styles.text>
              {(
                 "Historically, Native communities were subject to programs which forced them to accept non-Native teachings. "
                 ++ "Natives in Tech seeks to encourage Native communties to use software development as a means to empower themselves while encoding a traditional worldview. "
               )
               ->text}
            </p>
            <h2 className=Styles.header2>
              "Who is this conference for?"->text
            </h2>
            <p className=Styles.points>
              <img className=Styles.icon src=checkmark />
              "Natives working in software development"->text
            </p>
            <p className=Styles.points>
              <img className=Styles.icon src=checkmark />
              "Non-Natives developing software that empowers Native peoples"
              ->text
            </p>
            <p className=Styles.points>
              <img className=Styles.icon src=checkmark />
              "Individuals and organzations seeking to engage, learn about, and support Native communities"
              ->text
            </p>
            <h2 className=Styles.header2>
              "Would you like to present?"->text
            </h2>
            <p className=Styles.text>
              "If you would like to present at this conference, create a session using the "
              ->text
              <a
                href="https://sessionize.com/natives-in-tech/"
                target="_blank"
                rel="noopener noreferrer">
                "sessionize platform."->text
              </a>
            </p>
            <h2 className=Styles.header2>
              "Would you like to attend?"->text
            </h2>
            <p className=Styles.text>
              {j|Stay up to date on all the latest details by joining our mailing list 👇.|j}
              ->text
            </p>
            <SubscribeForm />
          </div>
        </div>
      </Frame>
    </div>,
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
