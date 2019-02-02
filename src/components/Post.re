open Helpers;

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
      margin2(~v=Shared.Spacer.px4, ~h=px(0)),
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
    style([width(`percent(100.0)), marginBottom(Shared.Spacer.px8)]);

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

let make = (~post, ~slug) => {
  ...component,
  render: _self =>
    <div>
      {switch ((post: Types.postNode)) {
       | Inactive
       | Loading => "Loading ..." |> text
       | Errored => <ErrorPage />
       | Idle(post) =>
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
             <meta name="twitter:card" content="summary_large_image" />
             <meta name="twitter:site" content="@nativesintech" />
             <meta name="twitter:creator" content="@nativesintech" />
             <meta name="twitter:title" content="Natives in Tech Blog" />
             <meta
               name="twitter:description"
               content={post##title ++ ": " ++ post##tagline}
             />
             <meta
               name="twitter:image"
               content="https://nativesintech.org/images/og-image.jpg"
             />
             <meta property="og:site_name" content="Natives in Tech" />
             <meta property="og:type" content="website" />
             <meta property="og:image:height" content="319" />
             <meta property="og:image:width" content="609" />
             <meta property="og:title" content="Natives in Tech Blog" />
             <meta
               property="og:description"
               content={post##title ++ ": " ++ post##tagline}
             />
             <meta
               property="og:url"
               content={"http://nativesintech.org/" ++ slug}
             />
             <meta
               property="og:image"
               content="https://nativesintech.org/images/og-image.jpg"
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
         </div>
       }}
    </div>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~post=PhenomicPresetReactApp.jsEdge(jsProps##post),
      ~slug=jsProps##slug,
    )
  );

let queries = props => {
  let post =
    PhenomicPresetReactApp.query(
      Item({path: "content/posts", id: props##params##splat}),
    );
  {"post": post, "slug": props##params##splat};
};
