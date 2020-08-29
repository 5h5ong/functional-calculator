import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #888596;
    font-size: 3rem;
    padding: 3rem;
    border: none;
    width: 100%;
`;

const BasicInput = ({ outcome }) => (
  <Input value={outcome} />
);

export default BasicInput;
