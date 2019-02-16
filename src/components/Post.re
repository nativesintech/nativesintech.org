open Helpers;
open Types;

module Styles = {
  open Css;

  let wrapper = style([height(`percent(100.0))]);

  let container =
    style([
      maxWidth(em(50.0)),
      margin2(~v=px(0), ~h=`auto),
      ...Shared.Styles.container,
    ]);

  let title =
    style([
      Shared.FontSize.px48,
      media("(max-width: 600px)", [Shared.FontSize.px36]),
    ]);

  let tagline =
    style([
      Shared.FontSize.px16,
      width(`percent(100.0)),
      margin2(~v=Shared.Spacer.px004, ~h=px(0)),
    ]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Shared.Colors.gray500),
      Shared.FontSize.px18,
      selector("> small:not(:last-child)", [marginRight(px(5))]),
      media("(max-width: 600px)", [Shared.FontSize.px14]),
    ]);

  let author =
    style([width(`percent(100.0)), marginBottom(Shared.Spacer.px008)]);

  let content =
    style([
      media(
        "(max-width: 600px)",
        [
          selector(" div > p", [Shared.FontSize.px18]),
          selector(" div > h2", [Shared.FontSize.px24]),
        ],
      ),
    ]);
};

let component = ReasonReact.statelessComponent("Post");

let make = (~post, ~params) => {
  ...component,
  render: _self =>
    <div>
      {switch ((post: Types.postNode)) {
       | Inactive
       | Loading => "Loading ..." |> text
       | Errored => <ErrorPage />
       | Idle(post) =>
         let {splat: article} = params;
         <div className=Styles.wrapper>
           <BsReactHelmet>
             <title>
               "Natives in Tech - Blog - "->text
               {post##title->text}
             </title>
             <meta
               name="description"
               content={post##title ++ ": " ++ post##tagline}
             />
             <meta name="keywords" content={post##tags} />
             <meta name="twitter:title" content="Natives in Tech Blog" />
             <meta
               name="twitter:description"
               content={post##title ++ ": " ++ post##tagline}
             />
             <meta property="og:title" content="Natives in Tech Blog" />
             <meta
               property="og:description"
               content={post##title ++ ": " ++ post##tagline}
             />
             <meta
               property="og:url"
               content={j|https://nativesintech.org/blog/$article/|j}
             />
           </BsReactHelmet>
           <Frame>
             <div />
             <article className=Styles.container>
               <PhenomicPresetReactApp.Link href="/blog">
                 {js| ← Back|js}->text
               </PhenomicPresetReactApp.Link>
               <header>
                 <h1 className=Styles.title> {post##title->text} </h1>
                 <div className=Styles.metaBox>
                   <small className=Styles.author>
                     "By "->text
                     {post##author->text}
                   </small>
                   <small> {post##date->text} </small>
                   <small> {j|—|j}->text </small>
                   <small> {post##minRead->text} " read"->text </small>
                 </div>
               </header>
               <section className=Styles.content>
                 <PhenomicPresetReactApp.BodyRenderer body=post##body />
               </section>
               <section> <SubscribeForm /> </section>
             </article>
           </Frame>
         </div>;
       }}
    </div>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~post=PhenomicPresetReactApp.jsEdge(jsProps##post),
      ~params=paramsFromJs(jsProps##params),
    )
  );

let queries = props => {
  let post =
    PhenomicPresetReactApp.query(
      Item({path: "content/posts", id: props##params##splat}),
    );
  {"post": post};
};
