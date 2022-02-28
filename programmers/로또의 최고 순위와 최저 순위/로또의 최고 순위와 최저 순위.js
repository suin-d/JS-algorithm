function solution(lottos, win_nums) {
  let lowNum = lottos.filter((v, i) => win_nums.includes(v)).length;
  console.log(`lowNum: ${lowNum}`); // 2
  let highNum = lowNum + lottos.filter((v, i) => v === 0).length;
  console.log(`highNum: ${highNum}`); // 4

  // ranking 순서대로이기 때문에 해당 Num과 일치하는 index 번호가 순위
  let ranking = [6, 6, 5, 4, 3, 2, 1];
  console.log([ranking[highNum]]);

  let answer = [ranking[highNum], ranking[lowNum]];

  // switch (highNum) {
  //   case 6:
  //     answer.push(1);
  //     break;
  //   case 5:
  //     answer.push(2);
  //     break;
  //   case 4:
  //     answer.push(3);
  //     break;
  //   case 3:
  //     answer.push(4);
  //     break;
  //   case 2:
  //     answer.push(5);
  //     break;
  //   default:
  //     answer.push(6);
  //     break;
  // }

  // switch (lowNum) {
  //   case 6:
  //     answer.push(1);
  //     break;
  //   case 5:
  //     answer.push(2);
  //     break;
  //   case 4:
  //     answer.push(3);
  //     break;
  //   case 3:
  //     answer.push(4);
  //     break;
  //   case 2:
  //     answer.push(5);
  //     break;
  //   default:
  //     answer.push(6);
  //     break;
  // }
  console.log(answer);
  return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

solution(lottos, win_nums);

// - input 구매한 로또 배열(모르는 번호는 0), 당첨 번호 배열
// - output 당첨 가능한 최고 순위와 최저 순위

// - 당첨 번호 filter 구매 번호 배열로 맞는 번호 갯수 확인 => 최저 순위
// - 만약 filter 수가 6과 일치하면 최저, 최고 둘다 1
// - filter 갯수 + 0의 갯수 => 6이면 1등, 5면 2등~ => 최고 순위
