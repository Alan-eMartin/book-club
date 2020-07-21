import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
// import Image from '../components/image';
// import SEO from '../components/seo';
import BookItem from "../components/BookItem";
import styled from 'styled-components';

const LinkButton = styled.div`
  text-align: right;
  
  a {
    padding: 8px;
    background-color: rebeccapurple;
    color: #fff;
    border-radius: 8px;
    text-decoration: none;
    transition: .5s ease all;
    /* display: block; */

    &:hover,
    &:focus {
      background-color: indigo;
      transform: translateY(2%)
    }
  }
`;

const IndexPage = (props) => { 
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          bookCover={edge.node.localImage.childImageSharp.fixed}
          key={edge.node.id}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>
              Join conversation
            </Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  );

}

// graphQL / firebase
export const query = graphql`
query MyQuery {
  allBook {
    edges {
      node {
        summary
        title
        id
        localImage {
          childImageSharp{
            fixed(width: 200){
              ...GatsbyImageSharpFixed
            }
          }
        }
        author {
          name
        }
      }
    }
  }
}
`

export default IndexPage
