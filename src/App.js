import React from 'react';
import styled from 'styled-components';
import BasicInput from './components/BasicInput';
import CalculatorButtons from './components/CalculatorButtons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <BasicInput />
      <CalculatorButtons />
    </Container>
  );
}

export default App;
