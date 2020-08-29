import React from 'react';
import styled from 'styled-components';

export const DefaultButtonStyle = styled.button`
  border: none;
  padding: 2rem;
  outline: none;
`;

const Button = styled(DefaultButtonStyle)`
  background-color: #dfdfdf;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:hover {
    background-color: #C4C4C4;
  }
`;

const BasicButton = ({ children }) => (
  <Button type="button">
    {children}
  </Button>
);

export default BasicButton;
