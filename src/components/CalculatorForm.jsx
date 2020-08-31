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

const CalculatorForm = ({ setOutcome, changeProcessState }) => (
  <Container>
    <CalculatorButtons setOutcome={setOutcome} />
    <ActionButtons changeProcessState={changeProcessState} />
  </Container>
);

export default CalculatorForm;
