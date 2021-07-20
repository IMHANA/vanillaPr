// #submitButton 클릭시의 처리 작업 설정
document.querySelector('#submitButton').addEventListener('click', (event) => {
    //전화번호 가져오기
    const phoneNumber = document.querySelector('#phoneNumberText').value;

    //전화번호에 하이픈(-)없애기
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

    alert(`전화번호는 ${trimmedPhoneNumber}입니다.`);

    //버튼의 기본 작동을 해제한다
    event.preventDefault();
})