function solution(s) {
  const parseIntS = s.split(' ').map((v) => parseInt(v));
  console.log(s.split(' ').map((v) => parseInt(v))); //[ '1', '2', '3', '4' ]

  console.log(Math.min(...parseIntS)); // 배열의 최댓값 반환할 땐 ... 스프레드 연산자 사용
  console.log([Math.min(...parseIntS), Math.max(...parseIntS)].join(' '));
  return [Math.min(...parseIntS), Math.max(...parseIntS)].join(' ');
}

solution('1 2 3 4');
