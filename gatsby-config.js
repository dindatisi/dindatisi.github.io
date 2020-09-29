require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Dinda Tisi Calista`,
    siteTitle: `dindatc`,
    siteHeadline: `dindatc - personal blog`,
    siteUrl: `https://www.dindatc.com`,
    siteDescription: `Dinda Calista personal site & blog. Writing about data analytics and other stuff.`,
    siteImage: `/dinda_avatar.jpg`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Home`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/dindatisi`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/dindatc/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-108869482-2", 
        enableDevelopment: false, // default false
        anonymizeIP: true,
        autoStartWithCookiesEnabled: false, 
        // Optional parameter - Configuration for react-ga and google analytics 
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 10
            }
        }
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dinda T. Calista`,
        short_name: `dindatc`,
        description: `Dinda Calista personal site & blog. Writing about data analytics and other stuff.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/dinda_avatar.jpg`,
            sizes: `192x192`,
            type: `image/png`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
