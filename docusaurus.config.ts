import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Dremio Documentation",
  tagline: "Official documentation for Dremio",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://katalyst-dremio-docs.vercel.app",
  baseUrl: "/",

  organizationName: "dremio",
  projectName: "dremio-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/load-data/current-load-data",
            to: "/load-data",
          },
          {
            from: "/get-started/current-get-started",
            to: "/get-started",
          },
          {
            from: "/security/current-security",
            to: "/security",
          },
          {
            from: "/what-is-dremio/current-what-is-dremio",
            to: "/what-is-dremio",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      {
        name: "description",
        content:
          "Official Dremio documentation for getting started, SQL reference, administration, and security.",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Dremio Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://www.dremio.com/get-started/",
          position: "right",
          label: "Start for Free",
          className: "navbar-start-free",
        },
        {
          type: "html",
          position: "right",
          value:
            '<form class="navbar-search-shell" action="/search" method="get" role="search"><label class="navbar-search-label" for="navbar-search-input">Search documentation</label><input id="navbar-search-input" name="q" type="search" placeholder="Search" /></form>',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/get-started",
            },
            {
              label: "Reference",
              to: "/reference",
            },
            {
              label: "Administration",
              to: "/administration",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/dremio",
            },
            {
              label: "Community Forum",
              href: "https://community.dremio.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dremio/dremio-oss",
            },
            {
              label: "Dremio Website",
              href: "https://www.dremio.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dremio Corporation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
