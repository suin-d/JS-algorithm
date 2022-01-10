function solution(strings, n) {
  console.log(
    strings.sort((str1, str2) =>
      str1[n] === str2[n]
        ? str1.localeCompare(str2)
        : str1[n].localeCompare(str2[n])
    )
  );
  return strings.sort((str1, str2) =>
    str1[n] === str2[n]
      ? str1.localeCompare(str2)
      : str1[n].localeCompare(str2[n])
  );
}

let strings1 = ['sun', 'bed', 'car'];
let strings2 = ['abce', 'abcd', 'cdx'];

solution(strings2, 2);
