function solution(s, n) {
  return s
    .split('')
    .map((v) => {
      return v === ' '
        ? v
        : v.charCodeAt() + n > 122 || // n을 더한 값이 소문자 코드 122를 넘어가거나(소문자 -> 대문자)
          (v.charCodeAt() <= 90 && v.charCodeAt() + n > 90) // 해당 문자 코드가 90이하(대문자)이면서 해당 문자 +n 값이 90 초과일 때 (대문자 -> 소문자)
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join('');

  console.log(
    s
      .split('')
      .map((v) => {
        return v === ' '
          ? v
          : v.charCodeAt() + n > 122 ||
            (v.charCodeAt() <= 90 && v.charCodeAt() + n > 90)
          ? String.fromCharCode(v.charCodeAt() + n - 26)
          : String.fromCharCode(v.charCodeAt() + n);
      })
      .join('')
  );
}

// 다른 풀이
function solution2(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

const s1 = 'AB'; //
const s2 = 'z';
const s3 = 'a B z';
const n1 = 1;
const n2 = 1;
const n3 = 4;
const n4 = 3; // DE

solution(s3, n3); //'BC"
solution2(s1, n1);
