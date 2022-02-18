function solution(A, B) {
  // console.log(A.sort());
  // const sortB = B.sort().reverse();
  // console.log(sortB);
  // console.log(
  //   A.sort()
  //     .map((v, i) => v * sortB[i])
  //     .reduce((acc, cur) => acc + cur, 0)
  // );

  // return A.sort()
  //   .map((v, i) => {
  //     v * sortB[i];
  //   })
  //   .reduce((acc, cur) => acc + cur, 0);

  const b = B.sort((p, c) => c - p);
  return A.sort((p, c) => p - c)
    .map((v, i) => v * b[i])
    .reduce((a, c) => a + c, 0);
}

solution([1, 4, 2], [5, 4, 4]);
