import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import PostsList from "../components/posts-list";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Container location={location}>
      <div className="ball-container"></div>
      <div className="ball"></div>
      <h2>Postagens:</h2>
      <PostsList posts={posts} />
    </Container>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`