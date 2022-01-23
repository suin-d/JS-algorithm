function solution(n) {
  // console.log(
  //   Array(n)
  //     .fill()
  //     .map((v, i) => i + 1)
  //     .filter((v) => n % v === 0)
  //     .reduce((acc, cur) => acc + cur)
  // ); // 첫 번째 풀었더 방법 => 테스트 케이스에서 한 경우에 런타임 에러가 떠서 아래와 같이 수정
  console.log(
    Array(n)
      .fill()
      .map((v, i) => i + 1)
      .reduce((acc, cur) => (n % cur === 0 ? acc + cur : acc), 0)
  );
  return Array(n)
    .fill()
    .map((v, i) => i + 1)
    .reduce((acc, cur) => (n % cur === 0 ? acc + cur : acc), 0);
}

const n = 5;
solution(n);
