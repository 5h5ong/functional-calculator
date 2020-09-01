import React from 'react';
import SpecialButton from './SpecialButton';

const SubtractButton = ({ changeProcessState }) => (
  <SpecialButton onClick={() => changeProcessState('subtract')}>
    -
  </SpecialButton>
);

export default SubtractButton;
