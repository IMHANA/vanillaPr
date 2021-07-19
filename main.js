//���簢��
const rectangle = document.querySelector('.rectangle');

// ��ư Ŭ���� onClickButton() ����
document.querySelector('.button').addEventListener('click', onClickButton);

//��ư ���������� �׶��̼� ���� ����
function onClickButton() {
    //0~359 ������ ������ �� ��������
    const randomHue = Math.trunc(Math.random() * 360);
    //�׶��̼��� ���۰� �� ������ ����
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    //���簢���� �׶��̼� ó�� ����
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}