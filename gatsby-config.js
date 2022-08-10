require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sandbox`,
    description: `Now leasing beachside space for creative offices, retailers, and restaurateurs`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sandbox Solana`,
        short_name: `Sandbox`,
        start_url: `/`,
        theme_color: `#1a13b8`,
        icon: `src/images/sandbox-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-bugherd`,
      options: {
        key: `9ch0kmze7tnem6mxboyumw`,

        // whether to include the snippet in production. Defaults to false
        showInProduction: false,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://zephyrpartners.us13.list-manage.com/subscribe/post?u=1db5b291fb452c94c41b18c35&amp;id=0599539572",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
