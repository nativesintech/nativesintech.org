open Helpers;

module Styles = {
  open Css;

  let container =
    style([
      padding2(~h=Shared.Spacer.px064, ~v=Shared.Spacer.px048),
      media(
        "(max-width: 600px)",
        [padding2(~h=Shared.Spacer.px024, ~v=Shared.Spacer.px048)],
      ),
    ]);

  let link = style([display(`inlineBlock)]);

  let title =
    style([
      Shared.FontSize.px36,
      selector(":hover", [color(Shared.Colors.cyan400)]),
    ]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Shared.Colors.gray500),
      selector("> small:not(:last-child)", [marginRight(px(5))]),
    ]);

  let tagline =
    style([
      Shared.FontSize.px16,
      width(`percent(100.0)),
      margin2(~v=Shared.Spacer.px004, ~h=px(0)),
    ]);
};

let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~posts) => {
  ...component,
  render: _self =>
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Blog"->text </title>
        <meta
          name="description"
          content="Sharing news from the Natives in Tech community."
        />
        <meta
          name="keywords"
          content="blog, natives in tech, natives, indigenous, tech, software development, open source"
        />
        <meta name="twitter:title" content="Natives in Tech Blog" />
        <meta
          name="twitter:description"
          content="Sharing news from the Natives in Tech community."
        />
        <meta property="og:title" content="Natives in Tech Blog" />
        <meta
          property="og:description"
          content="Sharing news from the Natives in Tech community."
        />
        <meta property="og:url" content="https://nativesintech.org/blog/" />
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
