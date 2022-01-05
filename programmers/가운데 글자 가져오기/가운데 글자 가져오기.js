function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 중간점 찾을 때 (length / 2)를 올림(ceil), -1은 substr에서 start index를 사용하기 때문에

solution('abcde');
// solution('qwer');

// // substr() 대신 slice() 사용 방법
// function solution(s) {
//   return console.log(s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length/2) +1));
// }
