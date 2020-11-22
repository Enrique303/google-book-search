import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 20px;
  h1 {
    color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Search For A Book</h1>
    </StyledHeader>
  )
};

export default Header;
