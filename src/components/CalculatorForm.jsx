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

const CalculatorForm = () => (
  <Container>
    <CalculatorButtons />
    <ActionButtons />
  </Container>
);

export default CalculatorForm;
