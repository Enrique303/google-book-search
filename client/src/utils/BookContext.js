import React from 'react';

const BookContext = React.createContext({
  result: {},
  search: '',
  handleInputChange: (e) =>{
    e.preventDefault();
  },
  handleFormSubmit: (e) => {
    e.preventDefault();
  }
});

export default BookContext;