function solution(a, b) {
  a > b && ([a, b] = [b, a]); // 숫사 순서 바꾸는 문법
  // console.log(a, b);
  return Array(b - a + 1)
    .fill(a) // a로 채움
    .map((v, i) => v + i) // a+0, a+1, a+2
    .reduce((acc, cur) => acc + cur);
}

a1 = 3;
b1 = 5;
a2 = 3;
b2 = 3;
a3 = 5;
b3 = 3;

console.log(solution(a3, b3));

// const ThreeArray = Array(5).fill(3);
// console.log(ThreeArray); // [ 3, 3, 3, 3, 3 ]

// const AddArray = Array(10)
//   .fill()
//   .map((v, i) => i + 1);
// console.log(AddArray); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const SumArray = Array(10)
//   .fill()
//   .map((v, i) => i + 1)
//   .reduce((acc, cur) => acc + cur);
// console.log(SumArray); // 55
