function solution(arr, divisor) {
  let answer = [];
  if (arr.filter((v) => v % divisor === 0).sort((a, b) => a - b).length > 0) {
    answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  } else {
    answer = [-1];
  }
  return answer;
}

// 1. 배열의 각 요소를 divisior로 나누었을 때 떨어지는 값을 '오름차순'으로 정렬한 배열 반환
// => 오름차순 정렬 numbers.sort((a, b) => a - b);
// 2. 나누어 떨어지는 값이 하나도 없다면 [-1] 반환

// 다른 풀이
// function solution(arr, divisor) {
//   let answer = arr.filter(v => v%divisor === 0);
//   return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
// }
