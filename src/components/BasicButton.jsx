import React from 'react';
import styled from 'styled-components';

export const DefaultButtonStyle = styled.button`
  border: none;
  padding: 2rem;
  outline: none;
`;

const Button = styled(DefaultButtonStyle)`
  background-color: #dfdfdf;
  &:hover {
    background-color: #C4C4C4;
  }
  font-size: 25pt;
`;

const BasicButton = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
);

export default BasicButton;
