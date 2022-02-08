function solution(arr1, arr2) {
  console.log(
    arr1.map((arr, i) => {
      console.log(arr);
      console.log(`i: ${i}`);
      arr.map((v, j) => {
        console.log(`v: ${v}`);
        console.log(`j: ${j}`);
        v + arr2[i][j];
      });
    })
  );

  return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
}

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

solution(arr1, arr2);
