const mapToArray = <K, V>(map: Map<K, V>): Array<{ name: K } & V> => {
  let result = [];
  for (let [key, value] of map.entries()) {
    result.push({
      name: key,
      ...value,
    });
  }

  return result;
};

type Resources = "Forum" | "Blog" | "Talent";
type ResourcesMap = Map<Resources, { href: string }>;

export const resourceLinksMap: ResourcesMap = new Map([
  ["Forum", { href: "https://forum.nativesintech.org/" }],
  ["Blog", { href: "https://blog.nativesintech.org/" }],
  ["Talent", { href: "https://talent.nativesintech.org/" }],
]);

export const resourceLinksArr = mapToArray(resourceLinksMap);

type NiTSocial = Map<"Slack" | "NiT Meetups", { href: string }>;
export const nitSocialMap: NiTSocial = new Map([
  ["Slack", { href: "" }],
  ["NiT Meetups", { href: "" }],
]);
export const nitSocialArr = mapToArray(nitSocialMap);

type SocialMedia = "GitHub" | "Twitter" | "LinkedIn" | "YouTube";
type SocialLinksMap = Map<SocialMedia, { href: string }>;
export const socialLinksMap: SocialLinksMap = new Map([
  ["GitHub", { href: "https://github.com/nativesintech" }],
  ["Twitter", { href: "https://twitter.com/nativesintech" }],
  ["LinkedIn", { href: "https://www.linkedin.com/company/natives-in-tech" }],
  [
    "YouTube",
    { href: "https://www.youtube.com/channel/UCRyR1Jm77K9uVN1QXvoLY6A" },
  ],
]);
export const socialLinksArr = mapToArray(socialLinksMap);

type Projects =
  | "Native Owned Businesses"
  | "Indigemoji"
  | "MMIWG2S"
  | "This Land I Stand";
type ProjectsMap = Map<Projects, { href: string }>;

export const projectsMap: ProjectsMap = new Map([
  [
    "Native Owned Businesses",
    { href: "https://github.com/nativesintech/native-owned-businesses" },
  ],
  ["Indigemoji", { href: "https://github.com/nativesintech/indigemoji" }],
  ["MMIWG2S", { href: "https://github.com/nativesintech/MMIWG2S" }],
  ["This Land I Stand", { href: "https://thislandistand.app" }],
]);
export const projectsArr = mapToArray(projectsMap);
