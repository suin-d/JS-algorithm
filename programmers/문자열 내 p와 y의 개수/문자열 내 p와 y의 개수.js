function solution(s) {
  console.log(
    s.toLowerCase().match(/p/g) === '' || s.toLowerCase().match(/y/g) === ''
      ? true
      : s.toLowerCase().match(/p/g).length ===
        s.toLowerCase().match(/y/g).length
      ? true
      : false
  ); // 런타임 에러
  // = s.match(/p/gi)?.length === s.match(/y/gi)?.length;

  console.log(s.replace(/p/gi, '').length === s.replace(/y/gi, '').length);

  return s.replace(/p/gi, '').length === s.replace(/y/gi, '').length;
}

let s1 = 'pPoooyY';
let s2 = 'Pyy';
solution(s2);
