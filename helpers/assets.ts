export const assets = {
  logo: { altText: "Natives in Tech logo", src: "/assets/natives_in_tech.svg" },
  netlify: {
    altText: "Netlify Logo",
    src: "/assets/netlify-callout-vertical-dark.svg",
  },
  externalLink: {
    altText: "External link icon",
    src: "/assets/external-link.svg",
  },
  primaryImage: {
    src: "/assets/taylor-ruecker-unsplash-2x.jpg",
    altText: "Native woman",
  },

  conference: {
    "2022": {
      speakerLineup: "/assets/conference/2022/speaker-lineup.mp4",
      gatherTown: "/assets/conference/2022/gather-town.mp4",
      shiptLogo: {
        altText: "Shipt logo",
        src: "/assets/conference/2022/shipt-logo.svg",
      },
    },
    "2023": {
      shiptLogo: {
        altText: "Shipt logo",
        src: "/assets/conference/2023/shipt-logo.svg",
      }
    }
  },
} as const;
