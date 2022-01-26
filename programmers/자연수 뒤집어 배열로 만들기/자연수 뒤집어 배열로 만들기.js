function solution(n) {
  console.log(
    String(n)
      .split('')
      .map((v) => parseInt(v))
      .reverse()
  );
  return String(n)
    .split('')
    .map((v) => parseInt(v))
    .reverse();
}

solution(12345);
