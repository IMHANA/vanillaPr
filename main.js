// �ؽ�Ʈ ����
let textarea = document.querySelector('.textarea');

// �Է����� ���� ��
let string_num = document.querySelector('.string_num');

// �ؽ�Ʈ�� �Է��Ҷ����� onKeyUp() ����
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    //�Էµ� �ؽ�Ʈ
    const inputText = textarea.value;

    //���ڼ� �ݿ�
    string_num.innerText = inputText.length;
}