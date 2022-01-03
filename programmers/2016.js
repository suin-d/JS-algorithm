function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let answer = days[new Date(2016, a - 1, b).getDay()];
  return answer;
}

// new Date : Date 객체 생성, month가 0부터 시작(1월이 0이고, 12월이 11) => 실제 month를 구하려면 -1
// getDay() : 요일 가져오는 메서드, 0~6 > 일요일 ~ 토요일
