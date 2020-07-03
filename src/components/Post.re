open Helpers;
open Shared;
open Types;

module Styles = {
  open Css;

  let wrapper = style([height(`percent(100.0))]);

  let container =
    style([
      maxWidth(em(50.0)),
      margin2(~v=px(0), ~h=`auto),
      ...Styles.container,
    ]);

  let title =
    style([FontSize.px48, media("(max-width: 600px)", [FontSize.px36])]);

  let tagline =
    style([
      FontSize.px16,
      width(`percent(100.0)),
      margin2(~v=Spacer.px004, ~h=px(0)),
    ]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Colors.gray500),
      FontSize.px18,
      selector("> small:not(:last-child)", [marginRight(px(5))]),
      media("(max-width: 600px)", [FontSize.px14]),
    ]);

  let author = style([width(`percent(100.0)), marginBottom(Spacer.px008)]);

  let content =
    style([
      media(
        "(max-width: 600px)",
        [
          selector(" div > p", [FontSize.px18]),
          selector(" div > h2", [FontSize.px24]),
        ],
      ),
    ]);
};

[@react.component]
let make = (~post, ~params) => {
  let post' = PhenomicPresetReactApp.jsEdge(post);
  <div>
    {switch ((post': Types.postNode)) {
     | Inactive
     | Loading =>
       <Frame>
         <div className=Styles.container> "Loading ..."->text </div>
       </Frame>
     | Errored => <ErrorPage />
     | Idle(post) =>
       let {splat: article} = params;
       let date = Intl.formatUSDate(post##date);
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
           <link rel="canonical" href={post##canonical} />
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
                 <small> date->text </small>
                 <small> {j|—|j}->text </small>
                 <small> {post##minRead->text} " read"->text </small>
               </div>
             </header>
             Belt.Option.(
               map(post##image, image =>
                 <img
                   style={ReactDOMRe.Style.make(~marginTop="20px", ())}
                   src={j|/images/$image|j}
                   width="100%"
                   height="auto"
                 />
               )
               ->getWithDefault(nothing)
             )
             <section className=Styles.content>
               <PhenomicPresetReactApp.BodyRenderer body=post##body />
             </section>
             <section> <SubscribeForm /> </section>
           </article>
         </Frame>
       </div>;
     }}
  </div>;
};

let queries = props => {
  let post =
    PhenomicPresetReactApp.query(
      Item({path: "content/posts", id: props##params##splat}),
    );
  {"post": post};
};
