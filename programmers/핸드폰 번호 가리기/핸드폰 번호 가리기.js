function solution(phone_number) {
  console.log(
    phone_number
      .slice(0, -4)
      .replace(/[0-9]/g, '*')
      .concat(phone_number.slice(-4))
  );
  // repeat()활용 방법
  console.log('*'.repeat(phone_number.length - 4) + phone_number.slice(-4));
  // 음수 인덱스를 사용해 배열 요소에 접근 가능!
  return phone_number
    .slice(0, -4)
    .replace(/[0-9]/g, '*')
    .concat(phone_number.slice(-4));
}

solution('027778888');
