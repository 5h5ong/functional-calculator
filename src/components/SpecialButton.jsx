import React from 'react';
import styled from 'styled-components';
import { DefaultButtonStyle } from './BasicButton';

const Button = styled(DefaultButtonStyle)`
  background-color: #f3933c;
  color: white;
  &:hover {
    background-color: #DB8637;
  }
  font-size: 25pt;
`;

const SpecialButton = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
);

export default SpecialButton;
