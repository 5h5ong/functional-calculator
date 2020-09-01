import React from 'react';
import styled from 'styled-components';
import BasicButton from './BasicButton';
import { spliceNumber } from '../libs/calculation';

const Wrapper = styled.div`
  display: grid; 
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const CalculatorButtons = ({ setOutcome, resetCalculator }) => {
  const onClick = (number) => {
    setOutcome((n) => spliceNumber(n, number));
  };

  return (
    <Wrapper>
      <BasicButton onClick={() => resetCalculator()}>AC</BasicButton>
      <BasicButton onClick={() => onClick(0)}>0</BasicButton>
      <BasicButton onClick={() => onClick(1)}>1</BasicButton>
      <BasicButton onClick={() => onClick(2)}>2</BasicButton>
      <BasicButton onClick={() => onClick(3)}>3</BasicButton>
      <BasicButton onClick={() => onClick(4)}>4</BasicButton>
      <BasicButton onClick={() => onClick(5)}>5</BasicButton>
      <BasicButton onClick={() => onClick(6)}>6</BasicButton>
      <BasicButton onClick={() => onClick(7)}>7</BasicButton>
      <BasicButton onClick={() => onClick(8)}>8</BasicButton>
      <BasicButton onClick={() => onClick(9)}>9</BasicButton>
    </Wrapper>
  );
};

export default CalculatorButtons;
