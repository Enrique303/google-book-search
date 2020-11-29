import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import BookContext from '../utils/BookContext';
import Header from './Header';
import Main from './Main';
import BookDetail from './BookDetail';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const BookContainer = () => {
  const [items, setItems] = useState({});
  const [search, setsearch] = useState("");

  useEffect(() => {
    searchBooks('The Name of the Wind');
  }, []);

  const searchBooks = async (q) => {
    try {
      const res = await API.search(q);
      console.log("BookContainer -> res", res.data.items)
      setItems(res.data.items);
    } catch (error) {
      console.log("there was an error processing your results")
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setsearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchBooks(search);
  };


  return(
    <BookContext.Provider value={{
      items,
      search,
      handleInputChange,
      handleFormSubmit,
    }}>
      <Layout>
        <Header />
        <Main>
          <BookDetail />
        </Main>
        <Footer />
      </Layout>
    </BookContext.Provider>
  );
};

export default BookContainer;