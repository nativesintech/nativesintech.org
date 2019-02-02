open Helpers;

[@bs.val] external token: string = "process.env.GITHUB_TOKEN";

[@bs.module]
external github: string = "../../../../public/images/github-black-logo.svg";

[@bs.module] external link: string = "../../../../public/images/link.svg";

[@bs.module] external mail: string = "../../../../public/images/mail.svg";

[@bs.module] external branch: string = "../../../../public/images/branch.svg";

module Styles = {
  open Css;

  let billboard =
    style([
      textAlign(`center),
      padding2(~v=Shared.Spacer.px192, ~h=Shared.Spacer.px64),
      backgroundColor(Shared.Colors.gray900),
      marginBottom(Shared.Spacer.px96),
      Shared.Styles.mobile([
        padding2(~v=Shared.Spacer.px128, ~h=Shared.Spacer.px24),
        marginBottom(Shared.Spacer.px64),
      ]),
    ]);

  let header = style([Shared.FontSize.px60, color(hex("fff"))]);

  let tagline =
    style([
      color(Shared.Colors.gray500),
      maxWidth(Shared.Spacer.px640),
      margin2(~v=px(0), ~h=`auto),
    ]);

  let container = style(Shared.Styles.container);

  let usersBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      justifyContent(`spaceAround),
      alignItems(`stretch),
    ]);

  let userBox =
    style([
      display(`flex),
      flexDirection(`column),
      maxWidth(Shared.Spacer.px384),
      marginBottom(Shared.Spacer.px128),
      borderRadius(Shared.Spacer.px4),
      borderTopLeftRadius(px(0)),
      borderTopRightRadius(px(0)),
      boxShadow(
        ~x=px(0),
        ~y=px(0),
        ~blur=px(2),
        ~spread=px(2),
        ~inset=false,
        Shared.Colors.gray200,
      ),
      Shared.Styles.mobile([
        marginBottom(Shared.Spacer.px128),
        maxWidth(Shared.Spacer.px256),
      ]),
    ]);

  let image = url =>
    style([
      backgroundImage(`url(url)),
      backgroundRepeat(`noRepeat),
      backgroundSize(`cover),
      width(Shared.Spacer.px384),
      height(Shared.Spacer.px384),
      borderBottom(px(1), `solid, Shared.Colors.gray200),
      Shared.Styles.mobile([
        width(Shared.Spacer.px256),
        height(Shared.Spacer.px256),
      ]),
    ]);

  let content = style([padding(Shared.Spacer.px24)]);

  let name = style([Shared.FontSize.px30]);

  let location =
    style([
      Shared.FontSize.px18,
      color(Shared.Colors.gray500),
      marginTop(Shared.Spacer.px4),
    ]);

  let username = style([Shared.FontSize.px18, color(Shared.Colors.gray500)]);

  let bio =
    style([
      marginTop(Shared.Spacer.px12),
      Shared.FontSize.px16,
      color(Shared.Colors.gray800),
      lineHeight(`abs(1.5)),
    ]);

  let iconsBox = style([display(`flex), marginTop(Shared.Spacer.px16)]);

  let icon =
    style([
      width(px(28)),
      height(px(28)),
      marginRight(Shared.Spacer.px16),
      alignItems(`center),
    ]);
};

type state = {members: list(Decoder.edge)};

type action =
  | LoadMembers(list(Decoder.edge));

let component = ReasonReact.reducerComponent(__MODULE__);

let make = _children => {
  ...component,
  initialState: () => {members: []},
  reducer: (action, _state) => {
    switch (action) {
    | LoadMembers(xs) => ReasonReact.Update({members: xs})
    };
  },
  didMount: self => {
    let payload = Js.Dict.empty();
    Js.Dict.set(
      payload,
      "query",
      Js.Json.string(
        "{
          organization(login:\"nativesintech\"){
            members(first: 100) {
              edges {
                node {
                  ...on User {
                    name
                    bio
                    avatarUrl
                    email
                    company
                    websiteUrl
                    location
                    login
                  }
                }
              }
            }
          }
        }",
      ),
    );
    Js.Promise.(
      Fetch.fetchWithInit(
        "https://api.github.com/graphql",
        Fetch.RequestInit.make(
          ~method_=Post,
          ~body=
            Fetch.BodyInit.make(
              Js.Json.stringify(Js.Json.object_(payload)),
            ),
          ~headers=
            Fetch.HeadersInit.make({
              "Content-Type": "application/json",
              "Authorization": {j|Bearer $token|j},
            }),
          (),
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(data => {
           let xs =
             Js.Json.stringify(data)
             |> Json.parseOrRaise
             |> Decoder.GitHubGraphQL.response;
           self.send(LoadMembers(xs));
           Js.Promise.resolve();
         })
      |> catch(e => {
           Js.log(e);
           Js.Exn.raiseError("There were an error in the promise");
         })
    )
    |> ignore;
    ();
  },
  render: self => {
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Awesome Natives in Tech"->text </title>
        <meta
          name="description"
          content="A list of Native and non-Native developers working in the software development industry that represent or serve Native communities"
        />
        <meta
          name="keywords"
          content="natives in tech, natives, indigenous, tech, software development, open source, awesome natives in tech"
        />
        <meta name="twitter:title" content="Awesome Natives in Tech" />
        <meta
          name="twitter:description"
          content="A list of Native and non-Native developers working in the software development industry that represent or serve Native communities"
        />
        <meta property="og:title" content="Awesome Natives in Tech" />
        <meta
          property="og:description"
          content="A list of Native and non-Native developers working in the software development industry that represent or serve Native communities"
        />
        <meta property="og:url" content="http://nativesintech.org/awesome/" />
      </BsReactHelmet>
      <Frame>
        <div className=Styles.billboard>
          <h1 className=Styles.header> "Awesome Natives in Tech"->text </h1>
          <p className=Styles.tagline>
            "A list of Native and non-Native developers working in the software development industry that represent or serve Native communities"
            ->text
          </p>
        </div>
        <div className=Styles.container>
          <div className=Styles.usersBox>
            {self.state.members
             |> List.map((m: Decoder.edge) => {
                  let orStr = Belt.Option.(getWithDefault(_, ""));
                  let (img, bio, email, location, login, name, websiteUrl) = (
                    m.node.avatarUrl->orStr,
                    m.node.bio->orStr,
                    m.node.email->orStr,
                    m.node.location->orStr,
                    m.node.login->orStr,
                    m.node.name->orStr,
                    m.node.websiteUrl->orStr,
                  );
                  <div className=Styles.userBox>
                    <div className={Styles.image(img)} />
                    <div className=Styles.content>
                      <div className=Styles.name> name->text </div>
                      <div className=Styles.location> location->text </div>
                      <p className=Styles.bio> bio->text </p>
                      <div className=Styles.iconsBox>
                        {email !== "" ?
                           <a
                             href={j|mailto:$email|j}
                             target="_blank"
                             rel="noopener noreferrer">
                             <img src=mail className=Styles.icon />
                           </a> :
                           nothing}
                        {websiteUrl !== "" ?
                           <a
                             href=websiteUrl
                             target="_blank"
                             rel="noopener noreferrer">
                             <img src=link className=Styles.icon />
                           </a> :
                           nothing}
                        {login !== "" ?
                           <a
                             href={j|https://github.com/$login|j}
                             target="_blank"
                             rel="noopener noreferrer">
                             <img src=branch className=Styles.icon />
                           </a> :
                           nothing}
                      </div>
                    </div>
                  </div>;
                })
             |> list}
          </div>
        </div>
      </Frame>
    </div>;
  },
};

let jsComponent = ReasonReact.wrapReasonForJs(~component, _jsProps => make());
