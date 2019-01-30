type node = {
  avatarUrl: option(string),
  bio: option(string),
  company: option(string),
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

module GitHubGraphQL = {
  let node = json =>
    Json.Decode.{
      avatarUrl: json |> field("avatarUrl", optional(string)),
      email: json |> field("email", optional(string)),
      bio: json |> field("bio", optional(string)),
      company: json |> field("company", optional(string)),
      location: json |> field("location", optional(string)),
      websiteUrl: json |> field("websiteUrl", optional(string)),
      name: json |> field("name", optional(string)),
      login: json |> field("login", optional(string)),
    };

  let edge = json => Json.Decode.{node: json |> field("node", node)};

  let response = json =>
    Json.Decode.(
      at(
        ["data", "organization", "members"],
        field("edges", list(edge)),
        json,
      )
    );
};
