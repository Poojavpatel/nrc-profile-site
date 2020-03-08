/* Implement Gatsby's Node APIs in this file. https://www.gatsbyjs.org/docs/node-apis/ */

const path = require ('path');
// Register posts as pages in gatsby using createPages api

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators;
    const postsTemplate = path.resolve('src/templates/posts.js');

    return graphql(`{
      allMarkdownRemark {
        edges{
          node{
            id
            html
            frontmatter{
              path
              title
            }
          }
        }
      }
  }`).then( res => {
    if(res.errors){
      console.log('----res.errors----', res.errors);
    }
    // console.log('----res.data----', res.data);
    res.data.allMarkdownRemark.edges.forEach((md) => {
      createPage({
        path: md.node.frontmatter.path,
        component:postsTemplate
      })
    })
  })
}