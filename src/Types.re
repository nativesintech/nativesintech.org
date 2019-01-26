type partialPost = {
  .
  "id": string,
  "title": string,
  "date": string,
  "tagline": string,
  "minRead": string,
  "author": string,
};

type posts =
  PhenomicPresetReactApp.edge(
    PhenomicPresetReactApp.jsNodeList(partialPost),
  );

type post = {
  .
  "id": string,
  "title": string,
  "date": string,
  "minRead": string,
  "author": string,
  "body": PhenomicPresetReactApp.BodyRenderer.jsBody,
};

type postNode = PhenomicPresetReactApp.edge(post);
