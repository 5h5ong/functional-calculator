import React from 'react';
import SpecialButton from './SpecialButton';

const DivisionButton = ({ changeProcessState }) => (
  <SpecialButton onClick={() => changeProcessState('division')}>
    /
  </SpecialButton>
);

export default DivisionButton;
