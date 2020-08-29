import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInput from './components/BasicInput';
import CalculatorButtons from './components/CalculatorButtons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  const [outcome, setOutcome] = useState(0);

  return (
    <Container>
      <BasicInput outcome={outcome} />
      <CalculatorButtons />
    </Container>
  );
}

export default App;
