import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInput from './components/BasicInput';
import CalculatorForm from './components/CalculatorForm';

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
      if (processState === 'plus') {
        setOutcome((v) => Number(v) + temp);
        setTemp(0);
      } else if (processState === 'subtract') {
        setOutcome((v) => Number(v) - temp);
      } else if (processState === 'multiply') {
        setOutcome((v) => Number(v) * temp);
      } else if (processState === 'division') {
        setOutcome((v) => Number(v) / temp);
      }
    } else {
      setProcessState(toBeChange);
      setTemp(Number(outcome));
      setOutcome('0');
    }
  };

  return (
    <Container>
      <BasicInput outcome={outcome} />
      <CalculatorForm changeProcessState={changeProcessState} setOutcome={setOutcome} resetCalculator={resetCalculator} />
    </Container>
  );
}

export default App;
