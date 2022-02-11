function solution(id_list, report, k) {
  let mailCount = new Array(id_list.length).fill(0);
  const removeDupReport = [...new Set(report)];
  console.log(removeDupReport);

  // reportUser = removeDupReport.map((v, j) => v.split(' ')[0]);
  // reportedUser = report.map((v, j) => v.split(' ')[1]);

  // console.log(removeDupReport.map((v) => v.split(' ')));
  // console.log(reportUser);
  // console.log(reportedUser);

  const reportedCount = removeDupReport.reduce((acc, cur) => {
    const [user, id] = cur.split(' ');
    console.log([user, id]);
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  console.log(reportedCount);

  report.forEach((value) => {
    const [user, id] = value.split(' ');
    //   console.log([user, id]);
    const index = id_list.indexOf(user);
    console.log(`index: ${index}`);

    mailCount[index] = mailCount[index] + reportedCount[id] < k ? 0 : 1;
    console.log(mailCount[index]);
  });
  console.log(mailCount);
  return mailCount;
}

// 1. 유저는 1번에 1명 유저 신고

// - 신고 횟수는 여러번 가능, 다른 유저면 횟수 제한 x
// - 동일 유저 신고 횟수 1회로 처리
//   => 중복 제거 : `[...new Set(arr)]`

// 2. k번 신고당하면 정지 => 이 유저를 신고한 모든 유저에게 메일 발송

// - 이용자의 ID가 담긴 문자열 배열 id_list
// - 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
// - 정지 기준이 되는 신고 횟수 k
//   => filter() 활용: reportedId가 k번 이상 존재할 때
//   => reportId reportedId 같이 map() 돌려서...

// - 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

const id_list2 = ['con', 'ryan'];
const report2 = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k2 = 3;
solution(id_list, report, k); // [2, 1, 1, 0]
