open Json.Decode;

module GitHubGraphQLAPI = {
  open Types.GitHubGraphQLAPI;

  let node = json => {
    avatarUrl: json |> field("avatarUrl", optional(string)),
    email: json |> field("email", optional(string)),
    bio: json |> field("bio", optional(string)),
    location: json |> field("location", optional(string)),
    websiteUrl: json |> field("websiteUrl", optional(string)),
    name: json |> field("name", optional(string)),
    login: json |> field("login", optional(string)),
  };

  let edge = json => {node: json |> field("node", node)};

  let decodeResponse = json =>
    at(
      ["data", "organization", "members"],
      field("edges", list(edge)),
      json,
    );
};

module SessionizeAPI = {
  open Types.SessionizeAPI;

  let link = json => {
    title: json |> field("title", string),
    url: json |> field("url", string),
    linkType: json |> field("linkType", string),
  };

  let session = json => {
    id: json |> field("id", int),
    name: json |> field("name", string),
  };

  let speaker = json => {
    id: json |> field("id", string),
    firstName: json |> field("firstName", string),
    lastName: json |> field("lastName", string),
    fullName: json |> field("fullName", string),
    bio: json |> field("bio", string),
    tagLine: json |> field("tagLine", string),
    profilePicture: json |> field("profilePicture", string),
    sessions: json |> field("sessions", list(session)),
    isTopSpeaker: json |> field("isTopSpeaker", bool),
    links: json |> field("links", list(link)),
  };

  let decodeResponse = json => Json.Decode.list(speaker, json);
};

module ConferenceDetails = {
  open Types.ConferenceDetails;

  let decodeConferenceDetailsFromStorage = json => {
    timestamp: json |> field("timestamp", int),
    data: json |> field("data", SessionizeAPI.decodeResponse),
  };
};
