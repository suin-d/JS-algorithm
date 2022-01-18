function solution(n) {
  // 배열 이용
  let suBak = Array(n)
    .fill()
    .map((v, i) => (i % 2 === 0 ? '수' : '박')) // 홀수면 '수' 짝수면 '박'
    .join('');
  console.log(suBak);

  // repeat() 활용
  let suBak2 = '수박'.repeat(n).slice(0, n);
  console.log(suBak2);

  return suBak;
}

solution(3);
