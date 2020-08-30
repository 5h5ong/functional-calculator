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

  return (
    <Container>
      <BasicInput outcome={outcome} />
      <CalculatorForm setOutcome={setOutcome} />
    </Container>
  );
}

export default App;
