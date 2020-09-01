import React from 'react';
import SpecialButton from './SpecialButton';

const ResultButton = ({ onClick }) => (
  <SpecialButton onClick={onClick}>
    =
  </SpecialButton>
);

export default ResultButton;
