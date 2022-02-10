function solution(a, b) {
  console.log(
    Array(b)
      .fill()
      .map(() => '*'.repeat(a))
      .join('\n')
  );
  return Array(b)
    .fill()
    .map(() => '*'.repeat(a))
    .join('\n');
}

solution(5, 3);
