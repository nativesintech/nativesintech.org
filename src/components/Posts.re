open Helpers;

module Styles = {
  open Css;

  let container =
    style([
      padding2(~h=Space.px64, ~v=Space.px48),
      media("(max-width: 600px)", [padding2(~h=Space.px24, ~v=Space.px48)]),
    ]);

  let link = style([display(`inlineBlock)]);

  let title =
    style([Font.font36, selector(":hover", [color(Colors.redA200)])]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Colors.gray500),
      selector("> small:not(:last-child)", [marginRight(px(5))]),
    ]);

  let tagline =
    style([
      Font.font16,
      width(`percent(100.0)),
      margin2(~v=Space.px4, ~h=px(0)),
    ]);
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~posts) => {
  ...component,
  render: _self =>
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Blog"->text </title>
        <meta name="description" content="The Natives in Tech blog" />
      </BsReactHelmet>
      <Frame>
        <section className=Styles.container>
          {switch ((posts: Types.posts)) {
           | Inactive
           | Loading => "Loading ..." |> text
           | Errored => "An error occured" |> text
           | Idle(posts) =>
             let postsList = posts##list |> Array.to_list;
             <div>
               <div>
                 {postsList
                  |> List.map(item =>
                       <article key=item##id>
                         <span className=Styles.link>
                           <PhenomicPresetReactApp.Link
                             href={"/blog/" ++ item##id ++ "/"}>
                             <h3 className=Styles.title>
                               {item##title->text}
                             </h3>
                           </PhenomicPresetReactApp.Link>
                         </span>
                         <div className=Styles.metaBox>
                           <small> {item##date |> text} </small>
                           <small> {j|—|j}->text </small>
                           <small> {item##minRead->text} " read"->text </small>
                           <p className=Styles.tagline>
                             {item##tagline->text}
                           </p>
                         </div>
                       </article>
                     )
                  |> list}
               </div>
               <div>
                 {switch (posts##previous |> Js.toOption) {
                  | Some(previous) =>
                    <PhenomicPresetReactApp.Link
                      href={
                        posts##previousPageIsFirst ?
                          "/blog" : "/blog/after/" ++ previous ++ "/"
                      }>
                      {"Newer posts" |> text}
                    </PhenomicPresetReactApp.Link>
                  | None => nothing
                  }}
                 {" " |> text}
                 {switch (posts##next |> Js.toOption) {
                  | Some(next) =>
                    <PhenomicPresetReactApp.Link
                      href={"/blog/after/" ++ next ++ "/"}>
                      {"Older posts" |> text}
                    </PhenomicPresetReactApp.Link>
                  | None => nothing
                  }}
               </div>
             </div>;
           }}
        </section>
      </Frame>
    </div>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~posts=PhenomicPresetReactApp.jsEdge(jsProps##posts))
  );

let queries = props => {
  let posts =
    PhenomicPresetReactApp.query(
      PaginatedList({
        path: "content/posts",
        by: Some("default"),
        value: None,
        order: None,
        sort: None,
        limit: Some(10),
        after: Some(props##params##after),
      }),
    );
  {"posts": posts};
};
