module.exports = {

  siteMetadata: {
    title: 'Master Gatsby blog',
  },

  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`,
      },

      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://vigilant-shockley-279aaf.netlify.com/` // required!
      },
    },

    'gatsby-transformer-remark'

  ]

}