function solution(arr) {
  const min = Math.min(...arr);
  // console.log(min);
  const removeMinArr = arr.filter((v) => v !== min);
  // console.log(removeMinArr.length <= 1 ? [-1] : removeMinArr);
  return removeMinArr.length <= 1 ? [-1] : removeMinArr;
}

solution([4, 3, 2, 1]);

// - 정수를 저장한 배열 arr / 가장 작은 수 x 제거한 removeSmArr 리턴
// => 오름차순 정렬 -> 첫번째 인덱스 값 제거

// - 빈배열일 시 배열에 -1 채워 리턴
// => 배열 length가 1이면 -1 리턴
