const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gradiot`,
    author: {
      name: `Tanay Pratap`,
      summary: `Gradiot an initiative for school and college students`,
    },
    description: `Don't waste 4 years of your productive life in college`,
    siteUrl: `https://gradiot.club`,
    social: {
      twitter: `tanaypratap`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        fonts: path.join(__dirname, 'src/fonts'),
        img: path.join(__dirname, 'src/img'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-163929831-1',
      },
    },
  ],
}
