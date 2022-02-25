function solution(s) {
  const enNumArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let answer2 = s;

  for (let i = 0; i < enNumArr.length; i++) {
    let arr = answer2.split(enNumArr[i]);
    console.log(`enNumArr[i]: ${enNumArr[i]}`);
    console.log(`arr: ${arr}`); // 문자로 split() 하면 해당 문자가 사라지고 ,로 구분 `,4seveneight`
    answer2 = arr.join(i);
    console.log(`answer2: ${answer2}`); // answer2: 14seveneight
  }
  console.log(parseInt(answer2));

  return parseInt(answer2);

  // 첫번째 풀이 방법
  // let answer = 0;

  // s = s.replace(/zero/g, 0);
  // s = s.replace(/one/g, 1);
  // s = s.replace(/two/g, 2);
  // s = s.replace(/three/g, 3);
  // s = s.replace(/four/g, 4);
  // s = s.replace(/five/g, 5);
  // s = s.replace(/six/g, 6);
  // s = s.replace(/seven/g, 7);
  // s = s.replace(/eight/g, 8);
  // s = s.replace(/nine/g, 9);

  // answer = Number(s);

  // console.log(answer);

  // 1. 숫자 배열, 문자 배열 만들기
  // 2. map() 활용, 문자일 시 숫자로 변경, 숫자면 변경 없음
}

solution('one4seveneight');
