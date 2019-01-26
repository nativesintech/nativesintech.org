open Helpers;

module Styles = {
  open Css;

  let container =
    style([
      padding2(~h=Space.px64, ~v=Space.px48),
      maxWidth(em(50.0)),
      margin2(~v=px(0), ~h=`auto),
      media(
        "(max-width: 600px)",
        [
          padding2(~h=Space.px24, ~v=Space.px48),
          selector("p", [Font.font18]),
        ],
      ),
    ]);

  let header = style([margin(px(0))]);
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - About"->text </title>
      </BsReactHelmet>
      <Frame>
        <div className=Styles.container>
          <header> <h1 className=Styles.header> "About"->text </h1> </header>
          <p>
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
          <p>
            "Natives in Tech is a coalition of Native and non-Native software developers whose goal is to support
              software application development that reinforces Native beliefs, knowledge, and identity.
              This is achieved through four initiatives: networking with aspiring and
              experienced developers alike, creating a strong social media presence on platforms familiar to developers,
              hosting a yearly Natives in Tech conference, and building open source software that Native peoples can use to cultivate
              healthy online communities."
            ->text
            <strong>
              "Through these initiatives we hope to build a strong community of developers that have the power to shape the online future of the communities they support."
              ->text
            </strong>
          </p>
        </div>
      </Frame>
    </div>,
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
