open Helpers;

[@bs.val] external token: string = "process.env.GITHUB_TOKEN";

[@bs.module]
external github: string = "../../../../public/images/github-black-logo.svg";

[@bs.module] external link: string = "../../../../public/images/link.svg";

[@bs.module] external mail: string = "../../../../public/images/mail.svg";

[@bs.module] external branch: string = "../../../../public/images/branch.svg";

module Styles = {
  open Css;

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
      maxWidth(Space.px384),
      marginBottom(Space.px24),
      boxShadow(
        ~x=px(0),
        ~y=px(0),
        ~blur=px(2),
        ~spread=px(2),
        ~inset=false,
        Colors.gray200,
      ),
    ]);

  let image = url =>
    style([
      backgroundImage(`url(url)),
      backgroundRepeat(`noRepeat),
      backgroundSize(`cover),
      width(Space.px384),
      height(Space.px384),
      borderRadius(Space.px4),
      borderBottomRightRadius(px(0)),
      borderBottomLeftRadius(px(0)),
      borderBottom(px(1), `solid, Colors.gray200),
    ]);

  let content = style([padding(Space.px24)]);

  let label =
    style([
      color(Colors.gray400),
      textTransform(`uppercase),
      Font.font12,
      paddingTop(Space.px8),
      paddingBottom(Space.px4),
    ]);

  let name = style([Font.font30]);

  let location = style([Font.font18, color(Colors.gray500)]);
  let username = style([Font.font18, color(Colors.gray500)]);
  let bio = style([marginTop(Space.px12)]);

  let iconsBox = style([display(`flex), marginTop(Space.px16)]);

  let icon =
    style([
      width(px(30)),
      height(px(30)),
      marginRight(Space.px24),
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
      <Frame>
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
                      <div className=Styles.bio> bio->text </div>
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
