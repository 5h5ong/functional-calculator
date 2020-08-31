/*
문자열과 숫자열을 이어 붙여줌
*/
export const spliceNumber = (string, number) => {
  if (string !== '0') {
    return `${string}${number}`;
  }
  return `${number}`;
};
