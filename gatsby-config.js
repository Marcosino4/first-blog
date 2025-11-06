module.exports = {
  siteMetadata: { title: `Mi Primer Blog`, description: `Blog universitario`, author: `Estudiante` },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/src/posts/` },
    },
  ],
}