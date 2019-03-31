type partialPost = {
  .
  "id": string,
  "title": string,
  "date": string,
  "tagline": string,
  "minRead": string,
  "author": string,
  "tags": string,
  "image": option(string),
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
  "tags": string,
  "tagline": string,
  "filename": string,
  "image": option(string),
  "body": PhenomicPresetReactApp.BodyRenderer.jsBody,
};

type postNode = PhenomicPresetReactApp.edge(post);

module GitHubGraphQLAPI = {
  type node = {
    avatarUrl: option(string),
    bio: option(string),
    email: option(string),
    location: option(string),
    name: option(string),
    websiteUrl: option(string),
    login: option(string),
  };

  type edge = {node};

  type edges = {edges: list(edge)};

  type organization = {members: edges};

  type response = {data: organization};
};

module SessionizeAPI = {
  type link = {
    title: string,
    url: string,
    linkType: string,
  };

  type session = {
    id: int,
    name: string,
  };

  type speaker = {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    bio: string,
    tagLine: string,
    profilePicture: string,
    sessions: list(session),
    isTopSpeaker: bool,
    links: list(link),
  };

  type response = list(speaker);
};

module ConferenceDetails = {
  type details = {
    timestamp: float,
    data: SessionizeAPI.response,
  };
};

[@bs.deriving jsConverter]
type params = {splat: string};
