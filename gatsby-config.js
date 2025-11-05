module.exports = {
  siteMetadata: { title: `Mi Blog Moderno`, description: `Blog universitario`, author: `Estudiante` },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/src/posts/` },
    },
  ],
}