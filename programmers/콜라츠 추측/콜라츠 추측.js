function solution(num, count = 0) {
  console.log(
    count === 500
      ? -1
      : num === 1
      ? count
      : solution(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1)
  ); // count를 함수 매개변수로 바로 넣어주는 방법
  return count === 500
    ? -1
    : num === 1
    ? count
    : solution(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1);
}

solution(16);
