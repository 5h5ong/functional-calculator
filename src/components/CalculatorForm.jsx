import React from 'react';
import styled from 'styled-components';
import CalculatorButtons from './CalculatorButtons';
import ActionButtons from './ActionButtons';

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

const CalculatorForm = ({
  setOutcome, changeProcessState, resetCalculator, calculateResult,
}) => {
  // 함수가 없다면 아래 ()의 jsx의 indent가 개판으로 되어버림
  const test = () => 'hello!';

  return (
    <Container>
      <CalculatorButtons
        setOutcome={setOutcome}
        resetCalculator={resetCalculator}
        calculateResult={calculateResult}
      />
      <ActionButtons changeProcessState={changeProcessState} calculateResult={calculateResult} />
    </Container>
  );
};

export default CalculatorForm;
