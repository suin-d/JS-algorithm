function solution(n) {
  console.log(`${n}`.split('').reduce((acc, cur) => acc + parseInt(cur), 0));
  return `${n}`.split('').reduce((acc, cur) => acc + parseInt(cur), 0);
}

solution(123);
