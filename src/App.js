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

  const changeProcessState = (toBeChange) => {
    if (temp !== 0) {
      if (processState === 'plus') {
        setOutcome((v) => Number(v) + temp);
        setTemp(0);
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
      <CalculatorForm changeProcessState={changeProcessState} setOutcome={setOutcome} />
    </Container>
  );
}

export default App;
