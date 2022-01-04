function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

// arr2 = [1, 1, 3, 3, 0, 1, 1];
// arr3 = [4, 4, 4, 3, 3];

// function solution(arr) {
//   let answer = arr.filter((v, i) => {
//     v !== arr[i + 1];
//     console.log(`v: ${v}`);
//     console.log(`i: ${i}`);
//     console.log(`arr[i]: ${arr[i]}`);
//     console.log(`arr[i+1]: ${arr[i + 1]}`);
//     // arr[i+1]을 하면 현재 값(arr[i]) 다음의 연속으로 오는 배열 값을 가리키기 때문에 해당 값과 일치하는지 여부를 체크할 수 있다.
//     // => 연속되는 값이 중복되지 않는 경우만 필터링한다.
//   });
//   return answer;
// }

// solution(arr2);
