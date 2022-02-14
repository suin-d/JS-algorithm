function solution(s) {
  // const fi = '(';
  // const se = ')';

  // if (s.length % 2 === 0) {
  //   // 짝수면 확인 검사
  //   console.log('짝수');
  //   const split = s.split('');
  //   console.log(split);
  //   if (s.slice(s.length - 1, s.length) === fi || s.slice(0, 1) === se) {
  //     console.log('false');
  //     return false;
  //   } else {
  //     return true;
  //   }
  // } else {
  //   console.log('홀수');
  //   return false;
  // }  // 정확성 테스트 에러
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // 스택처럼 활용
    console.log(s[i]);
    s[i] === '(' ? count++ : count--;
    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true; // 최송 count 수가 0이면 올바른 괄호
}

const s = '()()';
const s2 = ')()(';
const s3 = '';
solution(s2);
