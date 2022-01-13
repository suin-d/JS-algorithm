function solution(s) {
  const checkNum = /^[0-9]*$/;

  if ((s.length === 4 || s.length === 6) && checkNum.test(s)) {
    return true;
  } else {
    return false;
  }
  // console.log(/^[0-9]*$/.test(s) && [4, 6].includes(s.length));
  // return /^[0-9]*$/.test(s) && [4, 6].includes(s.length);
}

let s = '1234';
solution(s);
