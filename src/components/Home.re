open Helpers;

[@bs.module]
external logo: string = "../../../../public/images/natives-in-tech-logo.png";

[@bs.module]
external slack: string = "../../../../public/images/slack-logo.svg";

[@bs.module]
external github: string = "../../../../public/images/github-logo.svg";

[@bs.module]
external medium: string = "../../../../public/images/medium-logo.png";

[@bs.module]
external twitter: string = "../../../../public/images/twitter-logo.svg";

[@bs.module]
external folk: string = "../../../../public/images/folk-pattern-black.png";

module Styles = {
  open Css;

  let container =
    style([
      margin2(~h=auto, ~v=px(0)),
      maxWidth(em(45.0)),
      position(`relative),
    ]);
  let containerContent =
    style([
      margin2(~h=auto, ~v=px(0)),
      maxWidth(em(45.0)),
      position(`relative),
      selector("> div", [paddingTop(px(100))]),
      selector("> div:last-child", [paddingBottom(px(100))]),
    ]);
  let header =
    style([
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
      maxWidth(px(900)),
      margin2(~h=`auto, ~v=px(0)),
    ]);
  let logo = style([display(`flex), alignItems(`center)]);
  let svg = style([marginRight(px(10))]);
  let links =
    style([
      display(`flex),
      selector("> a:not(:last-child)", [marginRight(px(10))]),
    ]);
  let billboard =
    style([
      minHeight(px(400)),
      fontSize(px(52)),
      color(Colors.gray50),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
      textAlign(`center),
      backgroundImage(`url(folk)),
    ]);
  let typingContainer = style([maxWidth(em(15.0))]);
  let typing = style([]);
  let intro = style([padding2(~h=px(0), ~v=px(40))]);
  let content = style([fontSize(px(24))]);
  let connect = style([padding2(~h=px(0), ~v=px(40))]);
  let heading = style([padding2(~v=px(30), ~h=px(0)), textAlign(`left)]);
  let icons =
    style([
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
      flexWrap(`wrap),
    ]);
  let changeOpacity =
    keyframes([(0, [opacity(0.8)]), (100, [opacity(1.0)])]);
  let icon =
    style([
      width(px(70)),
      height(px(70)),
      opacity(0.8),
      transition(~duration=200, ~timingFunction=`easeInOut, "transform"),
      selector(
        "&:hover",
        [
          transform(scale(1.5, 1.5)),
          transition(~duration=200, ~timingFunction=`easeInOut, "transform"),
          animations([
            animation(~duration=200, ~fillMode=`forwards, changeOpacity),
          ]),
        ],
      ),
    ]);
  let inputs =
    style([
      display(`flex),
      selector("div:not(:last-child)", [marginRight(px(20))]),
      flexWrap(`wrap),
    ]);
  let inputWrapper =
    style([
      display(`flex),
      flexDirection(`column),
      marginBottom(px(10)),
      flex(1),
    ]);
  let label =
    style([
      textTransform(`uppercase),
      fontSize(px(18)),
      marginBottom(px(5)),
      color(Colors.gray700),
    ]);
  let input =
    style([
      borderRadius(px(2)),
      border(px(2), `solid, Colors.gray400),
      fontSize(px(20)),
      padding(px(5)),
      color(Colors.gray900),
    ]);

  let textarea =
    style([
      borderRadius(px(2)),
      border(px(2), `solid, Colors.gray400),
      fontSize(px(18)),
      padding(px(5)),
      minHeight(px(150)),
      selector("&:invalid", [boxShadow(`transparent)]),
    ]);
  let footer =
    style([
      backgroundColor(Colors.gray900),
      color(Colors.gray50),
      textAlign(`center),
      minHeight(px(60)),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
    ]);
  let reach = style([padding2(~h=px(0), ~v=px(40))]);
  let buttonColor = Colors.redA200;
  let button =
    style([
      fontSize(px(18)),
      border(px(2), `solid, buttonColor),
      textTransform(`uppercase),
      padding2(~h=px(30), ~v=px(10)),
      borderRadius(px(3)),
      backgroundColor(buttonColor),
      fontWeight(`bold),
      cursor(`pointer),
      color(Colors.gray50),
      selector(
        "&:hover",
        [
          backgroundColor(Colors.gray50),
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
  let hesci = style([textDecoration(`underline)]);
};

type state = {empty: string};
type action =
  | NoOp;

let component = ReasonReact.reducerComponent("Home");

let make = () => {
  ...component,
  initialState: () => {empty: ""},
  reducer: (action, _state) => {
    switch (action) {
    | NoOp => ReasonReact.NoUpdate
    };
  },
  didMount: _self => {
    let _ =
      Typing.make(
        "#typing",
        Typing.options(
          ~strings=[|
            "We are Natives in Tech",
            {j|gOtcyathla nAnû, wAchêthlê tOtsûdachE k'asOsOha nôkû|j},
          |],
          ~typeSpeed=50,
          ~backSpeed=30,
          ~loop=true,
          ~backDelay=500,
          ()
        ),
      );
    ();
  },
  render: _self =>
    <div>
      <BsReactHelmet> <title> "Natives in Tech"->text </title> </BsReactHelmet>
      <div className=Styles.container>
        <div className=Styles.header>
          <div className=Styles.logo>
            <img className=Styles.svg src=logo width="50px" height="50px" />
            <h1> "Natives in Tech"->text </h1>
          </div>
          <div className=Styles.links>
            <a href="#about"> "About"->text </a>
            <a href="#connect"> "Connect"->text </a>
            <a href="#contact"> "Contact"->text </a>
          </div>
        </div>
      </div>
      <div className=Styles.billboard>
        <div className=Styles.typingContainer>
          <span id="typing" className=Styles.typing />
        </div>
      </div>
      <div id="about" className=Styles.containerContent>
        <div>
          <h2>
            <a
              className=Styles.hesci
              href="http://www.muscogeenation-nsn.gov/_OLD/Pages/Language/audio/hesci2.mp3"
              target="_blank"
              rel="noopener noreferrer">
              "Hesci"->text
            </a>
            {j|! 👋|j}->text
          </h2>
          <p className=Styles.content>
            "New software technologies and design patterns make it easier for developers to quickly protoype, build, and ship high quality software applications
          for users all around the world. In turn, Native peoples have adopted these applications as the de facto
          standard for engaging with other community members. "
            ->text
            <strong>
              "What if instead of social media applications that are
          geared towards everyone, there were applications geared towards Native communities and their
          specific needs, interests, and identities? "
              ->text
            </strong>
            "What if when you read someone's profile you also learned what
          clan or band they are from? What if you could learn they spoke your tribal language? These are the kinds of questions
          that the Natives in Tech community hopes to answer and we would like you to be a part of it!"
            ->text
          </p>
          <p className=Styles.content>
            <strong>
              "Natives in Tech is a coalition of Native and non-Native software developers whose goal is to support
            software application development that reinforces Native beliefs, knowledge, and identity. "
              ->text
            </strong>
            "This is
            achieved through several initiatives: creating a strong social media presence on platforms familiar to software developers,
            hosting a yearly Natives in Tech conference, and building open source software that Native peoples can use to cultivate
            healthy online communities."
            ->text
          </p>
        </div>
        <div id="connect">
          <h2> {j|Connect 💻|j}->text </h2>
          <p>
            "Connect with us on any of our social media platforms."->text
          </p>
          <div className=Styles.icons>
            <a
              href="https://nativesintech.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img src=slack className=Styles.icon />
            </a>
            <a
              href="https://github.com/nativesintech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=github className=Styles.icon />
            </a>
            <a
              href="https://medium.com/natives-in-tech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=medium className=Styles.icon />
            </a>
            <a
              href="https://twitter.com/nativesintech"
              target="_blank"
              rel="noopener noreferrer">
              <img src=twitter className=Styles.icon />
            </a>
          </div>
        </div>
        <div id="contact">
          <h2> {j|Contact 📧|j}->text </h2>
          <p> "Reach out and ask us a question or leave a comment."->text </p>
          <form
            action="https://formspree.io/nativesintech@gmail.com"
            method="POST">
            <div className=Styles.inputs>
              <div className=Styles.inputWrapper>
                <label className=Styles.label> "Name*"->text </label>
                <input
                  required=true
                  className=Styles.input
                  type_="text"
                  placeholder="Sonny Brown"
                  name="name"
                />
              </div>
              <div className=Styles.inputWrapper>
                <label className=Styles.label> "Email*"->text </label>
                <input
                  required=true
                  className=Styles.input
                  type_="email"
                  placeholder="sonnybrown@aol.com"
                  name="_replyto"
                />
              </div>
            </div>
            <div className=Styles.inputWrapper>
              <label className=Styles.label> "Message*"->text </label>
              <textarea
                required=true
                className=Styles.textarea
                placeholder={j|I am all 👂👂.|j}
                name="message"
              />
            </div>
            <button className=Styles.button type_="submit" value="Send">
              "Submit"->text
            </button>
          </form>
        </div>
      </div>
      <footer className=Styles.footer>
        {j|Made with ❤️ by Natives in Tech |j}->text
      </footer>
    </div>,
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
