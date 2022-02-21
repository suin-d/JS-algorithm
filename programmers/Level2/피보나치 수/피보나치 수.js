function solution(n) {
  const arr = [0, 1]; // 피보나치 수의 첫번째 수, 두번째 수는 0과 1로 고정
  for (let i = 1; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i]) % 1234567);
  }
  return arr[n];
}

solution(8);
