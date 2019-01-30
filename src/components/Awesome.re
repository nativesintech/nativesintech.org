open Helpers;

[@bs.val] external token: string = "process.env.GITHUB_TOKEN";

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
                  let orShruggie =
                    Belt.Option.(
                      mapWithDefault(_, {j|¯\\_(ツ)_/¯|j}, v =>
                        switch (v) {
                        | "" => {j|¯\\_(ツ)_/¯|j}
                        | _ => v
                        }
                      )
                    );
                  let (
                    img,
                    bio,
                    company,
                    email,
                    location,
                    login,
                    name,
                    websiteUrl,
                  ) = (
                    m.node.avatarUrl->orShruggie,
                    m.node.bio->orShruggie,
                    m.node.company->orShruggie,
                    m.node.email->orShruggie,
                    m.node.location->orShruggie,
                    m.node.login->orShruggie,
                    m.node.name->orShruggie,
                    m.node.websiteUrl->orShruggie,
                  );

                  <div className=Styles.userBox>
                    <div className={Styles.image(img)} />
                    <div className=Styles.content>
                      <div className=Styles.label> "Name"->text </div>
                      <div> name->text </div>
                      <div className=Styles.label>
                        "GitHub Username"->text
                      </div>
                      <div> login->text </div>
                      <div className=Styles.label> "Email"->text </div>
                      <div> email->text </div>
                      <div className=Styles.label> "Location"->text </div>
                      <div> location->text </div>
                      <div className=Styles.label> "Company"->text </div>
                      <div> company->text </div>
                      <div className=Styles.label> "Bio"->text </div>
                      <div> bio->text </div>
                      <div className=Styles.label> "Website"->text </div>
                      <div> websiteUrl->text </div>
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
