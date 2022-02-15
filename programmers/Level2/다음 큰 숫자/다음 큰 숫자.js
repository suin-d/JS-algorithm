function solution(n) {
  const bin2 = n.toString(2); // 1001110
  const bin = n.toString(2).match(/1/g).length; // 4
  while (n++) {
    if (n.toString(2).match(/1/g).length === bin) return n;
  } // return으로 반복문 멈춤
}

solution(78);
