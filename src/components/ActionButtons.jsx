import React from 'react';
import styled from 'styled-components';
import PlusButton from './PlusButton';
import SubtractButton from './SubtractButton';
import MultiplyButton from './MultiplyButton';
import DivisionButton from './DivisionButton';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 300px;
  grid-template-rows: repeat(4, 1fr) 
`;

const ActionButtons = () => (
  <Container>
    <PlusButton />
    <SubtractButton />
    <MultiplyButton />
    <DivisionButton />
  </Container>
);

export default ActionButtons;
