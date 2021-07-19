// 텍스트 영역
let textarea = document.querySelector('.textarea');

// 입력중인 문자 수
let string_num = document.querySelector('.string_num');

// 텍스트를 입력할때마다 onKeyUp() 실행
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    //입력된 텍스트
    const inputText = textarea.value;

    //문자수 반영
    string_num.innerText = inputText.length;
}