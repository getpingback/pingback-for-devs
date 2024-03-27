// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pingback for Developers",
  tagline: "From Developers to Developers",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developers.pingback.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "getpingback", // Usually your GitHub org/user name.
  projectName: "pingback-for-devs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/getpingback/pingback-for-devs/tree/master/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/pingback-for-devs.png",
      navbar: {
        logo: {
          alt: "Pingback Logo",
          src: "img/logo-dark.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            href: "https://github.com/getpingback/pingback-for-devs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "API",
                to: "/docs/intro",
              },
              {
                label: "Embed",
                to: "/docs/intro",
              },
              {
                label: "Email Verification",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Newsroom",
                href: "https://pingback.com/newsroom",
              },
              {
                label: "GitHub",
                href: "https://github.com/getpingback",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/pingbackoficial",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pingback. Built with 💜 for Developers.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
