/**
 * JS Doc
 * 두 수를 받아서 덧셈 결과를 반환
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @author 'chans'(주로 Github 닉네임)
 */
function add(a, b) {
    return a + b;
}
console.log(add('3', 5));

// 두 번째 함수 생성 방식 (함수 표현식)
const multiply = function(a, b) {
    return a * b;
}
console.log(multiply(3, 5));

// ES6(2015년)에 등장한 화살표 함수 표현식
const sub = (a, b) => {
    return a - b;
}
// Q. 구현부 로직이 1줄일 경우? {}, return 키워드 생략 가능
const sub2 = (a, b) => a - b;
// Q. 별도의 파라미터가 없는 경우에도 () 작성은 필수... 그렇지 않으면 문법 구조가 깨짐
const sayHello = () => console.log('Hello');
// Q. 파라미터가 1개인 경우 () 생략 가능
const square = x => x * x; // 생략 해도 되고
const square1 = (x) => x * x; // 안해도 되고

function greeting(name) {
    console.log(`Hello, ${name}`);
}
function processUserInput(name, callbackFuntion) {
    callbackFuntion(name); // greeting(name)과 동일
}
// processUserInput라는 함수로 전달된 greeting 이라는 함수를 콜백(callback) 함수라고 함
processUserInput('chans', greeting);

const sendAppleBox = () => console.log(`옆집 아주머니에게 전달 완료`);
function waitCoupang(appleBox, callbackcoupang) {
    console.log(`쿠팡에서 ${appleBox}를 도착했다.`);
    callbackcoupang();
}
waitCoupang('사과', sendAppleBox);
