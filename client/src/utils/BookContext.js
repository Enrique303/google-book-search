import React from 'react';

const BookContext = React.createContext({
  items: {},
  search: '',
  handleInputChange: () =>{},
  handleFormSubmit: () => {}
});

export default BookContext;