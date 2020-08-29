import React from 'react';
import styled from 'styled-components';
import { DefaultButtonStyle } from './BasicButton';

const Button = styled(DefaultButtonStyle)`
  background-color: #f3933c;
  color: white;
`;

const SpecialButton = ({ children }) => (
  <Button>
    {children}
  </Button>
);

export default SpecialButton;
