# Gatsby Project

api_endpoint = http://nikeplus.nike.com/nikeplus/v1/services;
(not working)

npm_repo = https://www.npmjs.com/package/node-nikerunclub;
   
## Building a Blog With Gatsby js
1. Install the Gatsby CLI   
    `npm install -g gatsby-cli`
1. Create a new site
    `gatsby new gatsby-site`
1. Change directories into site folder
    `cd gatsby-site`
1. Start the development server
    `gatsby develop`   
    Your gatsby site will be ready, you can access the gatsby development environment at localhost:8000 by default.   
    GraphiQL will serve on http://localhost:8000/___graphql
    You can edit JavaScript pages in the src/pages and the changes will be reloaded automatically in the browser.

1. Create a production build
    `gatsby build`
    With the build command, Gatsby will perform production build for your site,
    which in other words means generating static HTML pages.

1. Serve the production build locally
    `gatsby serve`
    Lastly, with the shell command, Gatsby will start local HTML server for testing your build site

---
## Project Steps
1. To run the project 
`gatsby develop`

2. To add sass
`npm install --save node-sass gatsby-plugin-sass`
change layout.css to layout.scss and all related imports

3. To read data from markdowmn files   
    1. (if not already present in config)   
       `npm install --save gatsby-source-filesystem`
    1. Make related changes in plugin options.
    1. We use remark to transform markdown files   
       `npm install --save gatsby-transformer-remark` 


---

## Notes

#### gatsby-transformer-remark
* This Plugin recognizes files with the following extensions as Markdown. md, markdown
* Each Markdown file is parsed into a node of type MarkdownRemark.
* All frontmatter fields are converted into GraphQL fields.
* A sample GraphQL query to get MarkdownRemark nodes   
`
{
  allMarkdownRemark {
    edges {
      node {
        html
        headings {
          depth
          value
        }
        frontmatter {
          # Assumes you're using title in your frontmatter.
          title
        }
      }
    }
  }
}
`
* Graphql query to get markdown files in graphiql   
    `
    query MyQuery {
    allMarkdownRemark {
        edges {
        node {
            html
            frontmatter {
            path
            title
            }
        }
        }
    }
    }
    `

#### Example of markdown file with frontmatter
    ---
    path: '/first-post'
    title: 'My First Blog Post'
    ---

    # First Blog Post

    content of the first blog post

#### Set inner HTML in react
`<div dangerouslySetInnerHTML= {{__html:data.markdownRemark.html}}/>`