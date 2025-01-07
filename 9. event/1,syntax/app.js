
const button = document.getElementById('btn');
console.dir(button);

// 이벤트 추가 2번째 방법
button.onclick = () => console.log('Clicked in JS File!');

// 이벤트 추가 3번째 방법
button.addEventListener('click', () => console.log('Clicked 3rd in JS File!'));
