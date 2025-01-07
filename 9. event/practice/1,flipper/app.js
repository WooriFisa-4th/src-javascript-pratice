// 버튼 클릭 시 색이 변경되는 기능

// 1. 버튼 클릭하면 (콜백) 함수가 동작
// 1-1. HTML <button>을 JS로 가져와야 함
const button = document.getElementById('btn');

// 1-2. 가져온 button에 마우스를 클릭하는 'click' 이벤트 추가
// const clickHandler = () => console.log('button clicked!');
// button.addEventListener('click', clickHandler);

button.addEventListener('click', () => {
    // 2. 콜백 함수는 색을 변경하는 로직이 필요
    // 2-1. 랜덤한 RGB값을 생성
    const [red, green, blue] = getRandomNumber(0, 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
    document.getElementById('explainer').innerHTML = `background color: ${red}, ${green}, ${blue}`;


});

// 랜덤값 추출
function getRandomNumber(min, max) {
    const randomRGBArray = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray;
}