const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({graphql, actions: {createPage}}) => {
  const courseTemplate = path.resolve('src/templates/courseTemplate.js')
  return graphql(`
      query {
        allMdx(
              filter: {frontmatter: {code: {ne: null}}}
          ) {
              edges {
                  node {
                      frontmatter {
                          code
                      }
                  }
              }
          }
      }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allMdx.edges.forEach(course => {
      createPage({
        path: `/course/${course.node.frontmatter.code}`,
        component: courseTemplate,
        context: {courseCode: course.node.frontmatter.code}
      })
    })
  })
}
