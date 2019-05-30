open Helpers;
open Shared;

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
      padding2(~v=Spacer.px192, ~h=Spacer.px064),
      backgroundColor(Colors.gray050),
      borderBottom(px(1), `solid, Colors.gray100),
      marginBottom(Spacer.px096),
      boxShadow(
        ~y=px(1),
        ~blur=px(1),
        ~spread=px(1),
        ~inset=true,
        Colors.gray100,
      ),
      Styles.mobile([
        padding2(~v=Spacer.px128, ~h=Spacer.px024),
        marginBottom(Spacer.px064),
      ]),
    ]);

  let header = style(Font.size(FontTypes.Title1));

  let tagline =
    style([
      color(Colors.gray500),
      maxWidth(Spacer.px640),
      margin2(~v=px(0), ~h=`auto),
      Styles.mobile([FontSize.px20]),
    ]);

  let container = style(Styles.container);

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
      maxWidth(Spacer.px384),
      marginBottom(Spacer.px128),
      borderRadius(Spacer.px004),
      overflow(`hidden),
      boxShadow(
        ~x=px(0),
        ~y=px(0),
        ~blur=px(2),
        ~spread=px(2),
        ~inset=false,
        Colors.gray050,
      ),
      Styles.mobile([marginBottom(Spacer.px128), maxWidth(Spacer.px256)]),
    ]);

  let image = url =>
    style([
      backgroundImage(`url(url)),
      backgroundRepeat(`noRepeat),
      backgroundSize(`cover),
      width(Spacer.px384),
      height(Spacer.px384),
      borderBottom(px(1), `solid, Colors.gray050),
      Styles.mobile([width(Spacer.px256), height(Spacer.px256)]),
    ]);

  let content = style([padding(Spacer.px024)]);

  let name = style([color(Colors.gray900), FontSize.px30]);

  let location =
    style([FontSize.px18, color(Colors.gray500), marginTop(Spacer.px004)]);

  let bio =
    style([
      marginTop(Spacer.px012),
      FontSize.px16,
      color(Colors.gray800),
      lineHeight(`abs(1.5)),
    ]);

  let iconsBox = style([display(`flex), marginTop(Spacer.px016)]);

  let icon =
    style([
      width(px(28)),
      height(px(28)),
      marginRight(Spacer.px016),
      alignItems(`center),
    ]);
};

type state = {data: WebData.t(list(Types.GitHubGraphQLAPI.edge))};

type action =
  | LoadMembers(WebData.t(list(Types.GitHubGraphQLAPI.edge)));

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (_state, action) =>
        switch (action) {
        | LoadMembers(d) => {data: d}
        },
      {data: RemoteData.NotAsked},
    );

  React.useEffect0(() => {
    let payload = Js.Dict.empty();
    Js.Dict.set(
      payload,
      "query",
      Js.Json.string(
        "{
          organization(login:\"nativesintech\"){
            membersWithRole(first: 100) {
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

    dispatch(LoadMembers(RemoteData.Loading));

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
      |> WebData.fromResponse(Decoders.GitHubGraphQLAPI.decodeResponse)
      |> then_(result => {
           dispatch(LoadMembers(result));
           resolve();
         })
    )
    |> ignore;

    None;
  });
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
      <meta property="og:url" content="https://nativesintech.org/awesome/" />
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
          {switch (state.data) {
           | NotAsked => nothing
           | Loading => "Loading..."->text
           | Failure(e) => {j|Sorry, there was an error: $e|j}->text
           | Success(d) =>
             d->Belt.List.map(m => {
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
               <div key=email className=Styles.userBox>
                 <div className={Styles.image(img)} />
                 <div className=Styles.content>
                   <div className=Styles.name> name->text </div>
                   <div className=Styles.location> location->text </div>
                   <p className=Styles.bio> bio->text </p>
                   <div className=Styles.iconsBox>
                     {email !== ""
                        ? <a
                            href={j|mailto:$email|j}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src=mail className=Styles.icon />
                          </a>
                        : nothing}
                     {websiteUrl !== ""
                        ? <a
                            href=websiteUrl
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src=link className=Styles.icon />
                          </a>
                        : nothing}
                     {login !== ""
                        ? <a
                            href={j|https://github.com/$login|j}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src=branch className=Styles.icon />
                          </a>
                        : nothing}
                   </div>
                 </div>
               </div>;
             })
             |> list
           }}
        </div>
      </div>
    </Frame>
  </div>;
};
