open Json.Encode;

module LocalStorage = {
  let link = (s: Types.SessionizeAPI.link) =>
    object_([
      ("title", string(s.title)),
      ("url", string(s.url)),
      ("linkType", string(s.linkType)),
    ]);

  let session = (s: Types.SessionizeAPI.session) =>
    object_([("id", int(s.id)), ("name", string(s.name))]);

  let speaker = (s: Types.SessionizeAPI.speaker) =>
    object_([
      ("id", string(s.id)),
      ("firstName", string(s.firstName)),
      ("lastName", string(s.lastName)),
      ("fullName", string(s.fullName)),
      ("bio", string(s.bio)),
      ("tagLine", string(s.tagLine)),
      ("profilePicture", string(s.profilePicture)),
      ("isTopSpeaker", bool(s.isTopSpeaker)),
      ("sessions", list(session, s.sessions)),
      ("links", list(link, s.links)),
    ]);

  let encodeConferenceData = data => {
    data |> list(speaker);
  };
};
