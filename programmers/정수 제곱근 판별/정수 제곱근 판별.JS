function solution(n) {
  x = Math.sqrt(n);
  // console.log(x);
  // console.log(Number.isInteger(x) ? Math.pow(x + 1, 2) : -1);
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

solution(3);
