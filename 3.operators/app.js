// 관계 연산자
const age = 11;
const result = age > 10;
console.log(result); // true
console.log(typeof result); // true

// 동등 연산자
console.log(5 == 5); // true 실행 과정에서 암묵적(implicit) 타입 변환하여 비교
console.log(5 == '오'); // false, 순수하게 값만 비교 '오'는 숫자 타입이 아님
console.log(5 === '5'); // false, 순수하게 타입을 가지고 비교(strict check)

// 논리 연산자
console.log(true && true); // true
console.log(5 > 3 && 2 === 2);

// 삼항 연산자
let yourAge = 25;
let beverage = (yourAge >= 18) ? '맥주' : '콜라';
console.log(beverage); // 맥주