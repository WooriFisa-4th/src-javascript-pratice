const a = 5;
console.log(a);
// typeof는 변수의 데이터 타입을 알려준다.
console.log(typeof(a));
console.log(typeof a);

// JS 는 다른 언어와 다르게, 언어 자료형을 선언하지 않으며, 데이터 변수의 타입 또한 변경이 가능하다.
// 그로 인해서 변수에 서로 다른 타입의 데이터를 할당할 수 있다.
// JS = 동적 타입 언어, 프로토타입 기반 언어(객체 지향이 아님)
let userName = 'John';
console.log(userName);
console.log(typeof(userName));
userName = 5;
console.log(userName);
// 런타임에 타입이 결정되는 동적 타입 언어
console.log(typeof(userName)); 

const myName = 'John';
console.log('Hello , I am', myName); // comma 연산(자동 띄어쓰기)
console.log('Hello , I am ' + myName); // + 연산
// template literal
// %{ 들어갈 수 있는 값? } => 값, 식(expression), 변수 등
console.log(`Hello , I am ${myName}`);
console.log(`${1 + 1}`);
// console.log(`${const b = 6;}`); // error


