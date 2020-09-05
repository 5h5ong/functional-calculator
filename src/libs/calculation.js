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

const plus = (first, second) => first + second;
const subtract = (first, second) => first - second;
const multiply = (first, second) => first * second;
const division = (first, second) => first / second;

/**
 * 계산
 */
export const calculate = curry((state) => {
  if (state === 'plus') {
    return plus;
  } if (state === 'subtract') {
    return subtract;
  } if (state === 'multiply') {
    return multiply;
  } if (state === 'division') {
    return division;
  }
  return false;
});
