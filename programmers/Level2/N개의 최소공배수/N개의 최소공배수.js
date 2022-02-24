function solution(arr) {
  console.log(
    arr.reduce((a, c) => {
      function u(n, m) {
        return m % n ? u(m % n, n) : n;
      } // m % n 나누어 지면 n이 최대 공약수, 아니면 다시 m%n의 나머지값으로 나누기
      return (a * c) / u(a, c);
    }, 1)
  );
  return arr.reduce((a, c) => {
    function u(n, m) {
      return m % n ? u(m % n, n) : n;
    }
    return (a * c) / u(a, c);
  }, 1);
}

solution([1, 2, 3]); // 6
