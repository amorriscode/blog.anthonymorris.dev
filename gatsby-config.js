module.exports = {
  siteMetadata: {
    title: `Anthony Morris | Software Engineer`,
    description: `Endlessly curious dreamer building products for the future.`,
    author: `@amorriscode`,
    name: `amorris|code`,
    siteUrl: `https://blog.anthonymorris.dev`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/amorriscode`,
      },
      {
        name: `github`,
        url: `https://github.com/amorriscode`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/amorrisphoto/`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/amorriscode/`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amorriscode | blog`,
        short_name: `amorriscode | blog`,
        start_url: `/`,
        background_color: `#1F1837`,
        theme_color: `#1F1837`,
        display: `standalone`,
        icon: `src/assets/rocket-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143384618-2",
        cookieDomain: "blog.anthonymorris.dev",
      },
    },
  ],
};
