import { curry } from 'ramda';

/*
문자열과 숫자열을 이어 붙여줌
*/
export const spliceNumber = (string, number) => {
  if (string !== '0') {
    return `${string}${number}`;
  }
  return `${number}`;
};

/**
 * 계산
 */
export const calculate = curry((state, first, second) => {
  if (state === 'plus') {
    return first + second;
  } if (state === 'subtract') {
    return first - second;
  } if (state === 'multiply') {
    return first * second;
  } if (state === 'division') {
    return first / second;
  }
  return false;
});
