import React from 'react';
import styled from 'styled-components';
import PlusButton from './PlusButton';
import SubtractButton from './SubtractButton';
import MultiplyButton from './MultiplyButton';
import DivisionButton from './DivisionButton';
import ResultButton from './ResultButton';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 300px;
  grid-template-rows: repeat(5, 1fr); 
`;

const ActionButtons = ({ changeProcessState }) => (
  <Container>
    <PlusButton changeProcessState={changeProcessState} />
    <SubtractButton changeProcessState={changeProcessState} />
    <MultiplyButton changeProcessState={changeProcessState} />
    <DivisionButton changeProcessState={changeProcessState} />
    <ResultButton changeProcessState={changeProcessState} />
  </Container>
);

export default ActionButtons;
