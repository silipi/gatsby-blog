import React, { useState } from "react";
import { graphql } from "gatsby";

import ModalContact from "../components/modalContact";
import PostsList from "../components/posts-list";
import Container from "../components/container";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const [showModal, setShowModal] = useState(false);

  return (
    <Container location={location}>
      {showModal ? <ModalContact setShowModal={(state) => setShowModal(state)}/> : ""}
      <button onClick={() => setShowModal(!showModal)} className="contact">Entre em contato :)</button>
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