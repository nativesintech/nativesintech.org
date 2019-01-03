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

module Styles = {
  open Css;

  let red = style([color(red)]);
  let container = style([margin2(~h=auto, ~v=px(0)), maxWidth(px(900))]);
  let header =
    style([
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
    ]);
  let logo = style([display(`flex), alignItems(`center)]);
  let svg = style([marginRight(px(10))]);
  let links =
    style([
      display(`flex),
      selector("> div:not(:last-child)", [marginRight(px(10))]),
    ]);
  let billboard =
    style([
      minHeight(px(400)),
      backgroundColor(black),
      fontSize(px(52)),
      color(white),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
      textAlign(`center),
    ]);
  let typingContainer = style([maxWidth(px(900))]);
  let typing = style([]);
  let content = style([fontSize(px(18))]);
  let connect = style([textAlign(`center)]);
  let heading = style([padding2(~v=px(30), ~h=px(0)), textAlign(`left)]);
  let icons =
    style([
      display(`flex),
      justifyContent(`spaceBetween),
      alignItems(`center),
    ]);
  let icon = style([width(px(70)), height(px(70))]);
  let inputs =
    style([
      display(`flex),
      selector("div:not(:last-child)", [marginRight(px(20))]),
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
      fontSize(px(10)),
      marginBottom(px(5)),
    ]);
  let input =
    style([
      borderRadius(px(2)),
      border(px(1), `solid, hex("000")),
      fontSize(px(18)),
      padding(px(5)),
    ]);

  let textarea =
    style([
      borderRadius(px(2)),
      border(px(1), `solid, hex("000")),
      fontSize(px(18)),
      padding(px(5)),
    ]);
  let footer =
    style([
      backgroundColor(black),
      color(white),
      textAlign(`center),
      minHeight(px(60)),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
    ]);
  let reach = style([padding2(~h=px(0), ~v=px(40))]);
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
      Typing.create(
        "#typing",
        Typing.options(
          ~strings=[|
            "We are Natives in Tech",
            {j|gOtcyathla nAnû, wAchêthlê tOtsûdachE k'asOsOha nôkû|j},
          |],
          ~typeSpeed=50,
          ~backSpeed=50,
          ~loop=true,
          ~backDelay=500,
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
            <div> "About"->text </div>
            <div> "Conference"->text </div>
            <div> "Contact"->text </div>
          </div>
        </div>
      </div>
      <div className=Styles.billboard>
        <div className=Styles.typingContainer>
          <span id="typing" className=Styles.typing />
        </div>
      </div>
      <div className=Styles.container>
        <h2> {j|Hensci! 👋|j}->text </h2>
        <p className=Styles.content>
          "In recent years, open source development has exploded and a new generation of software applications
         have captivated the minds of users from all walks of life. New software technologies and design patterns
         have made it easier for developers to quickly protoype, build, and ship high quality software applications
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
        <div className=Styles.connect>
          <h2 className=Styles.heading> {j|Connect with Us 💻|j}->text </h2>
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
        <div className=Styles.reach>
          <h2> {j|Reach Out 📧|j}->text </h2>
          <form
            action="https://formspree.io/nativesintech@gmail.com"
            method="POST">
            <div className=Styles.inputs>
              <div className=Styles.inputWrapper>
                <label className=Styles.label> "Name"->text </label>
                <input
                  required=true
                  className=Styles.input
                  type_="text"
                  placeholder="Sonny Brown"
                  name="name"
                />
              </div>
              <div className=Styles.inputWrapper>
                <label className=Styles.label> "Email"->text </label>
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
              <label className=Styles.label> "Message"->text </label>
              <textarea
                required=true
                className=Styles.textarea
                placeholder={j|Tell me something. I am all 👂.|j}
                name="message"
              />
            </div>
            <button type_="submit" value="Send"> "Submit"->text </button>
          </form>
        </div>
      </div>
      <footer className=Styles.footer>
        {j|Made with ❤️ by Natives in Tech |j}->text
      </footer>
    </div>,
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
