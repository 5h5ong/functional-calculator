import React from 'react';
import SpecialButton from './SpecialButton';

const PlusButton = ({ changeProcessState }) => (
  <SpecialButton onClick={() => changeProcessState('plus')}>
    +
  </SpecialButton>
);

export default PlusButton;
