open Helpers;
open Shared;

module Styles = {
  open Css;

  let container =
    style([
      padding2(~h=Spacer.px064, ~v=Spacer.px048),
      media(
        "(max-width: 600px)",
        [padding2(~h=Spacer.px024, ~v=Spacer.px048)],
      ),
    ]);

  let link = style([display(`inlineBlock)]);

  let title =
    style([FontSize.px36, selector(":hover", [color(Colors.cyan400)])]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Colors.gray500),
      selector("> small:not(:last-child)", [marginRight(px(5))]),
    ]);

  let tagline =
    style([
      FontSize.px16,
      width(`percent(100.0)),
      margin2(~v=Spacer.px004, ~h=px(0)),
    ]);
};

[@react.component]
let make = (~posts) => {
  let posts' = PhenomicPresetReactApp.jsEdge(posts);
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
        {switch ((posts': Types.posts)) {
         | Inactive
         | Loading => "Loading ..." |> text
         | Errored => "An error occured" |> text
         | Idle(posts) =>
           let postsList = posts##list |> Array.to_list;
           <div>
             <div>
               {postsList->Belt.List.map(item => {
                  let date = Intl.formatUSDate(item##date);
                  <article key=item##id>
                    <span className=Styles.link>
                      <PhenomicPresetReactApp.Link
                        href={"/blog/" ++ item##id ++ "/"}>
                        <h3 className=Styles.title> {item##title->text} </h3>
                      </PhenomicPresetReactApp.Link>
                    </span>
                    <div className=Styles.metaBox>
                      <small> {date |> text} </small>
                      <small> {j|—|j}->text </small>
                      <small> {item##minRead->text} " read"->text </small>
                      <p className=Styles.tagline> {item##tagline->text} </p>
                    </div>
                  </article>;
                })
                |> list}
             </div>
             <div>
               {switch (posts##previous |> Js.toOption) {
                | Some(previous) =>
                  <PhenomicPresetReactApp.Link
                    href={
                      posts##previousPageIsFirst
                        ? "/blog" : "/blog/after/" ++ previous ++ "/"
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
  </div>;
};

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
