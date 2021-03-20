export type Locale = {
  "/": {
    missionTitle: string;
    missionBlurb: string;
    missionCTAText: string;
    captionText: string;
  };
  "/about": {
    h1: string;
    h2: string;
    networkTitle: string;
    networkBlurb: string;
    socialMediaTitle: string;
    socialMediaBlurb: string;
    conferenceTitle: string;
    conferenceBlurb: string;
    buildTitle: string;
    buildBlurb: string;
  };
  "/conference": {
    h1: string;
    blurb: string;
    conferenceForTitle: string;
    conferenceForItem1: string;
    conferenceForItem2: string;
    conferenceForItem3: string;
    watchTitle: string;
  };
  "/donate": {
    h1: string;
    blurb: string;
    individualsTitle: string;
    individualsBlurb: string;
    organizationsTitle: string;
    organizationsBlurb: string;
  };
  "/community": {
    h1: string;
    blurb: string;
    nitCommunityTitle: string;
    nitCommunityBlurb: string;
  };
  "/projects": {
    h1: string;
    blurb: string;
  };
  "/contact": {
    h1: string;
    blurb: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  header: {
    nit: string;
    about: string;
    conf: string;
    donate: string;
    community: string;
    projects: string;
    contact: string;
  };
  footer: {
    nonprofitBlurb: string;
  };
};

export type MergedData = Omit<Locale, "header" | "footer"> &
  Locale["header"] &
  Locale["footer"];
