// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pingback for Developers",
  tagline: "From Developers to Developers",
  favicon: "img/favicon.ico",

  url: "https://developers.pingback.com",

  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  organizationName: "getpingback",
  projectName: "pingback-for-devs",

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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/getpingback/pingback-for-devs/tree/master/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
                label: "API Reference",
                to: "/docs/api/introduction",
              },
              {
                label: "Email Verification Library",
                to: "/docs/email-verification-library/introduction",
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
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Use",
                href: "https://pingback.com/newsroom/termos-de-uso",
              },
              {
                label: "Privacy Policy",
                href: "https://pingback.com/newsroom/politica-de-privacidade-e-protecao-de-dados",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pingback. Built with 💜 for Developers.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "specs/api.yaml",
            outputDir: "docs/api",
            downloadUrl: "https://raw.githubusercontent.com/getpingback/pingback-for-devs/master/specs/api.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
