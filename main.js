//양단에 공백이 있을 때
const targetString1 = '    안녕하세여    ';
const trimmedString1 = targetString1.trim();
console.log(trimmedString1);
//결과 : '안녕하세여'

//줄바꿈 문자가 삽입되어 있는 경우
const targetString2 = '   귤은 맛있습니다.\n';
const trimmedString2 = targetString2.trim();
console.log(trimmedString2);
//결과 : '귤은 맛있습니다.'

//문자열 사이의 공백은 제거되지 않는다.
const targetString3 = '  사과, 귤.   ';
const trimmedString3 = targetString3.trim();
console.log(trimmedString3);
//결과 : '사과, 귤.'