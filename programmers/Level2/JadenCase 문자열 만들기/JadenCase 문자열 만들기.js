function solution(s) {
  console.log(
    s
      .split(' ')
      .map((v) => {
        return v
          .split('')
          .map((a, i) => {
            //           console.log(v);
            console.log(i);
            i ? a.toLowerCase() : a.toUpperCase(); // 0이면 첫글자 => 대문자
          })
          .join('');
      })
      .join(' ')
  );
  return s
    .split(' ')
    .map((v) => {
      return v
        .split('')
        .map((a, i) => (i ? a.toLowerCase() : a.toUpperCase()))
        .join('');
    })
    .join(' ');
}

solution('3people unFollowed me');
