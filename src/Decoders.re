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

  let decodeResponseExn = json =>
    at(
      ["data", "organization", "membersWithRole"],
      field("edges", list(edge)),
      json,
    );

  let decodeResponse = json =>
    try (Belt.Result.Ok(decodeResponseExn(json))) {
    | Json.Decode.DecodeError(err) => Belt.Result.Error(err)
    };
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

  let decodeResponseExn = json => Json.Decode.list(speaker, json);

  let decodeResponse = json =>
    try (Belt.Result.Ok(decodeResponseExn(json))) {
    | Json.Decode.DecodeError(err) => Belt.Result.Error(err)
    };
};

module ConferenceDetails = {
  open Types.ConferenceDetails;

  let decodeConferenceDetailsFromStorageExn = json => {
    timestamp: json |> field("timestamp", Json.Decode.float),
    data: json |> field("data", SessionizeAPI.decodeResponseExn),
  };

  let decodeConferenceDetailsFromStorage = json =>
    try (Belt.Result.Ok(decodeConferenceDetailsFromStorageExn(json))) {
    | Json.Decode.DecodeError(err) => Belt.Result.Error(err)
    };
};
