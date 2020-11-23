import React, {useContext} from 'react';
import BookContext from '../utils/BookContext';
import styled from 'styled-components';

const StyleSearch = styled.form`
  display: flex;
  border: 1px solid #333333;
  padding: 10px;
  margin-top: 20px;
  width: 60%;
  .form-group {
    display:flex;
    flex-direction: column;
    width:100%;
    label {
      font-weight: bold;
      margin-bottom: 10px;
    }
    input {
      height: 40px;
      outline:none;
    }
    button {
      height: 40px;
      border-radius: 5px;
      background-color: grey;
      color: #fff;
      font-size: 20px;
    }
  }
`;

const Search = () => {
  const {search, handleInputChange, handleFormSubmit} = useContext(BookContext);

  return (
    <StyleSearch>
      <div className="form-group">
        <label htmlFor = "search">Search:</label>
        <input
        value = {search}
        name= "search"
        type="text"
        placeholder = "Search for a Movie"
        id="search"
        onChange={handleInputChange}
        />
        <br />
        <button onClick= {handleFormSubmit}>Search</button>
      </div>
    </StyleSearch>
  )
}

export default Search;