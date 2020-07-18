import React from 'react';

import styled from 'styled-components';

// styles
const BookItemWrapper = styled.section`
border: 0.1rem solid #ddd;
padding: 8px;
background: #fff;
margin-bottom: 8px;
display: flex;

h2 {
  small {
    font-size: 14px;
    padding-left: 8px;
    font-weight: normal;
  }
}
`;

const BookItemImgWrapper = styled.div`
  max-width: 200px;

  img {
    max-width: 200px;
  }
`;

const BookItemContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`;



const BookItem = ({authorName, bookTitle, bookSummary, bookCover, children}) => {
  return (
    <BookItemWrapper>
      <BookItemImgWrapper>
        <img src={bookCover} alt={`${bookTitle} cover`}/>
      </BookItemImgWrapper>
      <BookItemContentWrapper>
        <h2>
          {bookTitle} -<small>{authorName}</small>
        </h2>
        <p>
          {bookSummary}
        </p>
        <div>
          {children}
        </div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  );
};

export default BookItem;