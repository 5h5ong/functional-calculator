import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #dfdfdf;
  border: none;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 2rem;
  outline: none;
  /* box-shadow: 10px -10px 4rem 2px lightgray; */
`;

const BasicButton = ({ children }) => (
  <Button type="button">
    {children}
  </Button>
);

export default BasicButton;
