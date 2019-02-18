open Helpers;

[@bs.module]
external slack: string = "../../../../public/images/slack-logo.svg";

[@bs.module]
external github: string = "../../../../public/images/github-black-logo.svg";

[@bs.module]
external medium: string = "../../../../public/images/medium-logo.svg";

[@bs.module]
external twitter: string = "../../../../public/images/twitter-logo.svg";

[@bs.module]
external frame: string = "../../../../public/images/native-land-image.jpg";

[@bs.module]
external computer: string =
  "../../../../public/images/computer-with-feather.svg";

module Styles = {
  open Css;

  let containerBox =
    style([
      maxWidth(em(50.0)),
      position(`relative),
      padding2(~h=Shared.Spacer.px064, ~v=px(0)),
      media(
        "(max-width: 600px)",
        [padding2(~h=Shared.Spacer.px024, ~v=px(0))],
      ),
    ]);

  let logo = style([display(`flex), alignItems(`center)]);

  let logoName = style([media("(max-width: 600px)", [display(`none)])]);

  let svg = style([marginRight(px(10))]);

  let linksBox =
    style([
      display(`flex),
      selector("> a:not(:last-child)", [marginRight(px(10))]),
    ]);

  let billboard =
    style([
      Shared.FontSize.px60,
      color(hex("0a1214")),
      display(`flex),
      justifyContent(`spaceAround),
      alignItems(`center),
      backgroundColor(hex("fbfcfe")),
      borderBottom(px(1), `solid, hex("ebf0fa")),
      marginTop(px(3)),
      padding2(~v=Shared.Spacer.px096, ~h=Shared.Spacer.px064),
      media("(max-width: 900px)", [flexDirection(`column)]),
      media(
        "(max-width: 600px)",
        [padding2(~h=Shared.Spacer.px024, ~v=Shared.Spacer.px032)],
      ),
    ]);

  let billboardHeadline =
    style([
      flex(2),
      media(
        "(max-width: 900px)",
        [
          textAlign(`center),
          Shared.FontSize.px48,
          paddingTop(Shared.Spacer.px048),
        ],
      ),
      media(
        "(max-width: 600px)",
        [
          display(`flex),
          alignItems(`center),
          justifyContent(`center),
          paddingTop(Shared.Spacer.px032),
        ],
      ),
    ]);

  let frameBox =
    style([
      display(`flex),
      padding2(~v=px(0), ~h=Shared.Spacer.px032),
      justifyContent(`center),
      alignItems(`center),
      media(
        "(max-width: 900px)",
        [
          paddingTop(Shared.Spacer.px048),
          paddingBottom(Shared.Spacer.px048),
        ],
      ),
    ]);

  let comp =
    style([
      width(px(350)),
      height(px(350)),
      Shared.Styles.mobile([width(px(250)), height(px(250))]),
    ]);

  let content = style([Shared.FontSize.px24]);

  let connect =
    style([
      padding2(~v=Shared.Spacer.px192, ~h=Shared.Spacer.px064),
      backgroundColor(hex("fbfcfe")),
      border(px(1), `solid, hex("ebf0fa")),
      Shared.Styles.mobile([
        padding2(~h=Shared.Spacer.px024, ~v=Shared.Spacer.px128),
      ]),
    ]);

  let connectHeadline =
    style([
      margin(px(0)),
      Shared.FontSize.px48,
      textAlign(`center),
      paddingBottom(Shared.Spacer.px064),
    ]);

  let about =
    style([
      position(`relative),
      paddingTop(Shared.Spacer.px064),
      paddingBottom(Shared.Spacer.px128),
      Shared.Styles.mobile([
        paddingTop(Shared.Spacer.px048),
        paddingBottom(Shared.Spacer.px064),
      ]),
    ]);

  let iconsBox =
    style([
      margin2(~v=px(0), ~h=`auto),
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
      flexWrap(`wrap),
      maxWidth(px(800)),
      Shared.Styles.mobile([
        flexDirection(`column),
        selector(
          "> a:not(:last-child)",
          [paddingBottom(Shared.Spacer.px048)],
        ),
      ]),
    ]);

  let icon =
    style([
      width(px(100)),
      height(px(100)),
      transition(~duration=200, ~timingFunction=`easeInOut, "transform"),
      selector(
        "&:hover",
        [
          transform(scale(1.5, 1.5)),
          transition(~duration=200, ~timingFunction=`easeInOut, "transform"),
        ],
      ),
      media("(max-width: 600px)", [width(px(75)), height(px(75))]),
    ]);

  let inputs =
    style([
      display(`flex),
      selector("span:not(:last-child)", [marginRight(px(20))]),
      flexWrap(`wrap),
      media(
        "(max-width: 633px)",
        [selector("span:not(:last-child)", [marginRight(px(0))])],
      ),
    ]);

  let inputBox =
    style([
      display(`flex),
      flexDirection(`column),
      marginBottom(Shared.Spacer.px012),
      flex(1),
    ]);

  let input =
    style([
      borderRadius(px(2)),
      border(px(1), `solid, Shared.Colors.gray300),
      Shared.FontSize.px18,
      padding(Shared.Spacer.px008),
      color(Shared.Colors.gray900),
    ]);

  let textarea =
    style([
      borderRadius(px(2)),
      Shared.FontSize.px18,
      padding(Shared.Spacer.px008),
      minHeight(Shared.Spacer.px128),
      selector("&:invalid", [boxShadow(`transparent)]),
    ]);

  let buttonColor = Shared.Colors.redA200;

  let button =
    style([
      Shared.FontSize.px18,
      border(px(2), `solid, buttonColor),
      textTransform(`uppercase),
      padding2(~h=Shared.Spacer.px032, ~v=Shared.Spacer.px012),
      borderRadius(px(3)),
      backgroundColor(buttonColor),
      fontWeight(`bold),
      cursor(`pointer),
      color(Shared.Colors.gray50),
      selector(
        "&:hover",
        [
          backgroundColor(Shared.Colors.gray50),
          color(buttonColor),
          transition(~duration=200, ~timingFunction=`easeInOut, "color"),
          transition(
            ~duration=200,
            ~timingFunction=`easeInOut,
            "background-color",
          ),
        ],
      ),
    ]);

  let topography =
    style([
      width(px(750)),
      height(px(400)),
      position(`absolute),
      right(px(0)),
      top(px(60)),
      zIndex(-1),
    ]);

  let contact =
    style([
      padding2(~v=Shared.Spacer.px096, ~h=Shared.Spacer.px064),
      maxWidth(em(50.0)),
      media(
        "(max-width: 600px)",
        [padding2(~h=Shared.Spacer.px024, ~v=Shared.Spacer.px032)],
      ),
    ]);
};

let component = ReasonReact.statelessComponent("Home");

let make = () => {
  ...component,
  didMount: _self => {
    let _ =
      Typing.make(
        "#typing",
        Typing.options(
          ~strings=
            Belt.Array.map(
              [|
                "Hello",
                {j|s@^gaêl'A|j},
                "Hesci",
                {j|Yá'át'ééh|j},
                "Halito",
              |],
              x =>
              x ++ "!"
            ),
          ~typeSpeed=70,
          ~backSpeed=50,
          ~loop=true,
          ~backDelay=500,
          (),
        ),
      );
    ();
  },
  render: _self => {
    let topography = Styles.topography;
    let connect = Styles.connect;
    let billboard = Styles.billboard;
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Home"->text </title>
        <meta
          name="description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source"
        />
        <meta name="twitter:title" content="Natives in Tech" />
        <meta
          name="twitter:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta property="og:title" content="Natives in Tech" />
        <meta
          property="og:description"
          content="Natives in Tech is a coalition of Native and non-Native developers who seek
          to empower and support Native communities around the world through software development."
        />
        <meta property="og:url" content="https://nativesintech.org" />
      </BsReactHelmet>
      <Frame>
        <section className={j|$billboard |j}>
          <div className=Styles.billboardHeadline>
            {j|Supporting software developers serving Native communities|j}
            ->text
          </div>
          <div className=Styles.frameBox>
            <img className=Styles.comp src=computer />
          </div>
        </section>
        <section id="about" className=Styles.about>
          <div className=Styles.containerBox>
            <h2> <span id="typing" /> </h2>
            <p className=Styles.content>
              {j|Welcome 👋. |j}->text
              <strong>
                "Natives in Tech is a coalition of Native and non-Native software developers whose goal is to support
                software application development that reinforces Native beliefs, knowledge, and identity. "
                ->text
              </strong>
              "This is achieved through four initiatives: networking with aspiring and
                experienced developers alike, creating a strong social media presence on platforms familiar to developers,
                hosting a yearly Natives in Tech conference, and building open source software that Native peoples can use to cultivate
                healthy online communities."
              ->text
            </p>
          </div>
          <div className={j|topography $topography|j} />
        </section>
        <section id="connect" className={j|$connect |j}>
          <h2 className=Styles.connectHeadline>
            {j|Connect with us!|j}->text
          </h2>
          <div className=Styles.iconsBox>
            <a
              href="https://nativesintech.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img src=slack className=Styles.icon />
            </a>
            <a
              href="https://medium.com/natives-in-tech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=medium className=Styles.icon />
            </a>
            <a
              href="https://github.com/nativesintech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=github className=Styles.icon />
            </a>
            <a
              href="https://twitter.com/nativesintech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=twitter className=Styles.icon />
            </a>
          </div>
        </section>
        <section id="contact" className=Styles.contact>
          <h2> {j|Ask a question or leave a comment 💬|j}->text </h2>
          <p>
            "We would love to hear from you! Feel free to send a message to "
            ->text
            <a href="mailto:hello@nativesintech.org">
              "hello@nativesintech.org"->text
            </a>
            {j| or drop us a line below.|j}->text
          </p>
          <form
            action="https://formspree.io/hello@nativesintech.org"
            method="POST">
            <div className=Styles.inputs>
              <span className=Styles.inputBox>
                <input
                  required=true
                  className=Styles.input
                  type_="text"
                  placeholder="Name"
                  name="name"
                />
              </span>
              <span className=Styles.inputBox>
                <input
                  required=true
                  className=Styles.input
                  type_="email"
                  placeholder="Email"
                  name="_replyto"
                />
              </span>
            </div>
            <span className=Styles.inputBox>
              <textarea
                required=true
                className=Styles.textarea
                placeholder="Message"
                name="message"
              />
            </span>
            <button className=Styles.button type_="submit" value="Send">
              "Submit"->text
            </button>
          </form>
        </section>
      </Frame>
    </div>;
  },
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
