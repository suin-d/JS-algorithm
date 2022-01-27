function solution(n) {
  console.log(
    parseInt(
      String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('')
    )
  );
  return parseInt(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

solution(118372);
