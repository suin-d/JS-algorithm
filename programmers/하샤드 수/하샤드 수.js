function solution(x) {
  let sum = String(x)
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  console.log(sum);
  console.log(x % sum === 0 ? true : false);
  return x % sum === 0 ? true : false;
}

solution(11);

// 1. 양의 정수 x, x의 자릿수의 합 sum => 문자열 나눠서 배열로 만든 후 더하기
// 2. x % sum === 0 ? true : false
