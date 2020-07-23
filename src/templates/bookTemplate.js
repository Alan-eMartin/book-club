import React from 'react';
import BookItem from '../components/BookItem';
import {graphql} from 'gatsby';

const BookTemplate = (props) => {
  console.log(props.data);
  return (
    <section>
      <BookItem 
      bookTitle={props.data.book.title}
      bookSummary={props.data.book.summary}
      authorName={props.data.book.author.name}
      bookCover={props.data.book.localImage.childImageSharp.fixed}
      />
    </section>
  );
};

// graphQL
export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}) {
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
`;

export default BookTemplate;