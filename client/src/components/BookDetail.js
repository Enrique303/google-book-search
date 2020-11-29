import React, { useContext } from 'react';
import BookContext from '../utils/BookContext';
import Search from './Search';
import styled from 'styled-components';

const StyleBookDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom:40px;


    h3 {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      text-align: center;
    }
    img {
      margin: 20px auto;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .card {
      width:100%;
      border-radius: 0;
    }
  }
`;

const BookDetail = () => {
  const { items: 
    {title,authors,imageLinks,publishedDate},
  }
    = useContext(BookContext);
  return (
    <StyleBookDetail>
      <div className="card">
        <>
        <h1>Title: {title}</h1>
        <h1>Author: {authors}</h1>
        <img alt={title} src={imageLinks}/>
        <h1>released: {publishedDate}</h1>
        <Search />
        </>
      </div>
    </StyleBookDetail>
  );
};

export default BookDetail;