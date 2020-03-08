import React from 'react';
import Layout from '../components/layout';

export default function Template({data}){
  // data is a prop injected by graphql
  return(
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML= {{__html:data.markdownRemark.html}}/>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter:{ path: {eq : $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`