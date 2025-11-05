const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({ node, name: "slug", value: slug })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`{ allMarkdownRemark { nodes { fields { slug } } } }`)
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({ path: node.fields.slug, component: require.resolve("./src/templates/post.js"), context: { slug: node.fields.slug } })
  })
}