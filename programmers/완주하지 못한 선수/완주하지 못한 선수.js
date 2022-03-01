function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(
    participant.map((v, i) => {
      console.log(`completion[i] : ${completion[i]}`);
    })
  );
  console.log(participant.find((v, i) => v !== completion[i]));
  return participant.find((v, i) => v !== completion[i]);
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];
solution(participant, completion);
// 처음에 includes로 활용하려 했으나 동명이인인 경우에 하나를 반환해야 하는데 모두 포함한 것으로 처리해서 에러
// find() 함수 사용 => 첫번째 값 리턴
