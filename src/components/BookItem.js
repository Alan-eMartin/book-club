import React from 'react';

import styled from 'styled-components';

// styles
const BookItemWrapper = styled.section`
border: 0.1rem solid #ddd;
padding: 8px;
background: #fff;
margin-bottom: 8px;
h2 {
  small {
    font-size: 14px;
    padding-left: 8px;
    font-weight: normal;
  }
}
`

const BookItem = ({authorName, bookTitle, bookSummary, children}) => {
  return (
    <BookItemWrapper>
      <h2>
        {bookTitle} -<small>{authorName}</small>
      </h2>
      <p>
        {bookSummary}
      </p>
      <div>
        {children}
      </div>
    </BookItemWrapper>
  );
};

export default BookItem;