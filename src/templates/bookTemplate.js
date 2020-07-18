import React from 'react';
import Layout from "../components/layout";
import BookItem from '../components/BookItem'

const BookTemplate = (props) => {
  
  return (
    <Layout>
      <BookItem 
      bookTitle={props.pageContext.title}
      bookSummary={props.pageContext.summary}
      authorName={props.pageContext.author.name}
      />
    </Layout>
  );
};

export default BookTemplate;