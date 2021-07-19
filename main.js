// ĳ���� �̹���
const character = document.querySelector('.character');

//����
let degree = 0;

//���� ����
loop();

//ȭ���� ���ŵɶ����� ����Ǵ� �Լ�
function loop() {
    //ȸ���� ��������� ���ϱ�
    const rotation = (degree * Math.PI) / 180;
    // ȸ�������� ��ġ ���ϱ�
    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;

    //character ��ġ �ݿ��ϱ�
    character.style.left = `${targetX}px`;
    character.style.top = `${targetY}px`;

    //���� 1�� ������Ű��
    degree += 1;

    //���� ȭ�� ���� Ÿ�ֿ̹��� loop() ����
    requestAnimationFrame(loop);
}