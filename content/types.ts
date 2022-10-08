export type Locale = {
  "/": {
    missionTitle: string;
    missionBlurb: string;
    missionCTAText: string;
    captionText: string;
    title: string;
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
    title: string;
  };
  "/conference": {
    h1: string;
    blurb: string;
    conferenceForTitle: string;
    conferenceForItem1: string;
    conferenceForItem2: string;
    conferenceForItem3: string;
    watchTitle: string;
    title: string;
  };
  "/conference/2022": {
    title: string;
    shortTitle: string;
    theme: string;
    sponsors: string;
    partneringSponsor: string;
    h1: string;
    h2: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    pleaseFollow: string;
    and: string;
    learnMore: string;
    interestedInSpeaking: string;
    learnAboutSpeaking: string;
    callForSpeakers: string;
    agenda: string;
    demoDay: string;
    demoDayDetails: string;
    conferenceDay: string;
    conferenceDayDetails: string;
    schedule: string;
    tba: string;
  };
  "/donate": {
    h1: string;
    blurb: string;
    individualsTitle: string;
    individualsBlurb: string;
    organizationsTitle: string;
    organizationsBlurb: string;
    title: string;
  };
  "/community": {
    h1: string;
    blurb: string;
    nitCommunityTitle: string;
    nitCommunityBlurb: string;
    title: string;
  };
  "/projects": {
    h1: string;
    blurb: string;
    title: string;
  };
  "/contact": {
    h1: string;
    blurb: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    title: string;
  };
  header: {
    nit: string;
    about: string;
    conf: string;
    donate: string;
    community: string;
    projects: string;
    contact: string;
    blog: string;
  };
  footer: {
    nonprofitBlurb: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export type MergedData = Omit<Locale, "header" | "footer"> &
  Locale["header"] &
  Locale["footer"];
