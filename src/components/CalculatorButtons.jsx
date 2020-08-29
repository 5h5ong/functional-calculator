import React from 'react';
import styled from 'styled-components';
import BasicButton from './BasicButton';

const Wrapper = styled.div`
  display: grid; 
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const CalculatorButtons = () => (
  <Wrapper>
    <BasicButton>1</BasicButton>
    <BasicButton>2</BasicButton>
    <BasicButton>3</BasicButton>
    <BasicButton>4</BasicButton>
    <BasicButton>5</BasicButton>
    <BasicButton>6</BasicButton>
    <BasicButton>7</BasicButton>
    <BasicButton>8</BasicButton>
    <BasicButton>9</BasicButton>
  </Wrapper>
);

export default CalculatorButtons;
