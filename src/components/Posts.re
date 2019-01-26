open Helpers;

let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~posts) => {
  ...component,
  render: _self =>
    <div>
      <BsReactHelmet>
        <title> "Natives in Tech - Blog"->text </title>
        <meta name="description" content="The Natives in Tech blog" />
      </BsReactHelmet>
      <h1> "Blog"->text </h1>
      {switch ((posts: Types.posts)) {
       | Inactive
       | Loading => "Loading ..." |> text
       | Errored => "An error occured" |> text
       | Idle(posts) =>
         let postsList = posts##list |> Array.to_list;
         <div>
           <ul>
             {postsList
              |> List.map(item =>
                   <li key=item##id>
                     <PhenomicPresetReactApp.Link
                       href={"/blog/" ++ item##id ++ "/"}>
                       {item##title |> text}
                     </PhenomicPresetReactApp.Link>
                   </li>
                 )
              |> list}
           </ul>
           <div>
             {switch (posts##previous |> Js.toOption) {
              | Some(previous) =>
                <PhenomicPresetReactApp.Link
                  href={
                    posts##previousPageIsFirst ?
                      "/" : "/after/" ++ previous ++ "/"
                  }>
                  {"Newer posts" |> text}
                </PhenomicPresetReactApp.Link>
              | None => nothing
              }}
             {" " |> text}
             {switch (posts##next |> Js.toOption) {
              | Some(next) =>
                <PhenomicPresetReactApp.Link href={"/after/" ++ next ++ "/"}>
                  {"Older posts" |> text}
                </PhenomicPresetReactApp.Link>
              | None => nothing
              }}
           </div>
         </div>;
       }}
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
