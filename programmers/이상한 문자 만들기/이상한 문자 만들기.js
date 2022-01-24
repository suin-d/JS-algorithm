function solution(s) {
  console.log(
    s
      .split(' ')
      .map((v, i) =>
        v
          .split('')
          .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
          .join('')
      )
      .join(' ')
  );
  return s
    .split(' ')
    .map((v, i) =>
      v
        .split('')
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join('')
    )
    .join(' ');
}

solution('try hello world');
// 1. 공백으로 문자열 나누기
// 2. 공백으로 나눈 단어별 홀:소문자, 짝:대문자 변경 (map(), index 활용)
// 3. 첫글자는 0번째 인덱스 => 짝수 처리 (join('') => 쉼표(,) 없이 합치기)
