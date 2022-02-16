function solution(n) {
  console.log(
    Array(n)
      .fill()
      .map((v, i) => i + 1)
      .filter((v) => !(n % v) && v % 2)
  );

  return Array(n)
    .fill()
    .map((v, i) => i + 1)
    .filter((v) => !(n % v) && v % 2).length;
}

solution(15); // 4
