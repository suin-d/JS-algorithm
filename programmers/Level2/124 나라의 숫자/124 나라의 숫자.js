function solution(n) {
  console.log(n % 3 || 3); // 1
  console.log((n - (n % 3 || 3)) / 3); // 1
  //  console.log(n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : '');
} //

solution(3);
