function solution(n, m) {
  function calc_gcd(n, m) {
    return m % n ? u(m % n, n) : n; // m % n 나누어 지면 n이 최대 공약수, 아니면 다시 m%n의 나머지값으로 나누기
    // return m % n === 0 ? n : calc_gcd(m % n, n);
  }
  const gcd = u(n, m);
  // console.log(gcd);
  // console.log((n * m) / gcd);
  return [gcd, (n * m) / gcd]; // 두수의 곱은 최대공약수*최소공배수 => 두수의 곱/최대공약수 : 최소공배수
}

solution(2, 24);
