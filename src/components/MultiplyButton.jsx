import React from 'react';
import SpecialButton from './SpecialButton';

const MultiplyButton = ({ changeProcessState }) => (
  <SpecialButton onClick={() => changeProcessState('multiply')}>
    *
  </SpecialButton>
);

export default MultiplyButton;
