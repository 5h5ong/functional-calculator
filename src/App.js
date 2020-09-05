import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInput from './components/BasicInput';
import CalculatorForm from './components/CalculatorForm';
import { calculate } from './libs/calculation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  const [outcome, setOutcome] = useState('0');
  const [temp, setTemp] = useState(0);
  const [processState, setProcessState] = useState('');

  const resetCalculator = () => {
    setTemp(0);
    setOutcome('0');
    setProcessState('');
  };
  const changeProcessState = (toBeChange) => {
    if (temp !== 0) {
      const result = calculate(processState);
      setOutcome(result(temp, Number(outcome)));
      setTemp(0);
    } else {
      setProcessState(toBeChange);
      setTemp(Number(outcome));
      setOutcome('0');
    }
  };
  const calculateResult = () => {
    if (temp !== 0) {
      setOutcome(calculate(processState)(temp, Number(outcome)));
      setTemp(0);
    }
  };

  return (
    <Container>
      <BasicInput outcome={outcome} />
      <CalculatorForm
        changeProcessState={changeProcessState}
        setOutcome={setOutcome}
        resetCalculator={resetCalculator}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
