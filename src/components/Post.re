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
    style([Font.font48, media("(max-width: 600px)", [Font.font36])]);

  let tagline =
    style([
      Font.font16,
      width(`percent(100.0)),
      margin2(~v=Space.px4, ~h=px(0)),
    ]);

  let metaBox =
    style([
      display(`flex),
      flexWrap(`wrap),
      color(Colors.gray500),
      Font.font18,
      selector("> small:not(:last-child)", [marginRight(px(5))]),
      media("(max-width: 600px)", [Font.font14]),
    ]);

  let author = style([width(`percent(100.0)), marginBottom(Space.px8)]);

  let content =
    style([
      media(
        "(max-width: 600px)",
        [
          selector(" div > p", [Font.font18]),
          selector(" div > h2", [Font.font24]),
        ],
      ),
    ]);
};

let component = ReasonReact.statelessComponent("Post");

let make = (~post) => {
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
             <meta name="keywords" content={post##tags} />
           </BsReactHelmet>
           <Frame>
             <article className=Styles.container>
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
    make(~post=PhenomicPresetReactApp.jsEdge(jsProps##post))
  );

let queries = props => {
  let post =
    PhenomicPresetReactApp.query(
      Item({path: "content/posts", id: props##params##splat}),
    );
  {"post": post};
};
