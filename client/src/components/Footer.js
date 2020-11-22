import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%auto;
  height: calc(100vh - 90vh);
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      &copy;{ new Date().getFullYear()} Book Search
    </StyledFooter>
  );
};

export default Footer;