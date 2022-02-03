function solution(arr) {
  console.log(arr.reduce((acc, cur) => acc + cur) / arr.length);
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

solution([1, 2, 3, 4]);
