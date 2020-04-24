import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { configure } from "@storybook/react";

import "../styles/index.css";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const loaderFn = () => [
  require("../pages/GettingStarted.story.mdx"),
  require("../components/Footer.stories.mdx"),
];

configure(loaderFn, module);
