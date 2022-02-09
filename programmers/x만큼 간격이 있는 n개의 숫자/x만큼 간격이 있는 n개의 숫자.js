function solution(x, n) {
  console.log(
    Array(n)
      .fill(x)
      .map((v, i) => (i + 1) * v)
  );
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

solution(-4, 2);
