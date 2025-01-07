/**
 * JS에서 원시값(primitive value) or 기본 타입을 제외한 모든 것들은 객체(object)이다.
 * 
 * 기본적인 차이는 원시값은 하나의 값만을 나타냄
 * 다만, 객체는 다양한 타입의 값들을 하나의 단위(타입)로 묶어서 구성되는 복합 자료 구조
 * 
 * 객체 - 프로퍼티(Property, 속성) 으로 구성된 집합
 * 프로퍼티는 key-value로 구성
 */

// 객체 리터럴 문법, {}가 객체를 뜻함
const dog = {}; // 별도의 프로퍼티가 없는 빈 객체

const cat = {
    age: 2,
}
console.log(cat); // 객체 자체를 출력
console.dir(cat); // 목록 형태로 출력
console.log(cat.age); // 프로퍼티에 직접 접근

const rabbit = {
    age: 2,
    name: '토토',
    walk: () => console.log('깡총깡총'),
    address: {
        si: '서울시',
        gu: '마포구',
        dong: '상암동'
    } // 객체 안에 객체를 넣을 수 있다.
}
console.log(rabbit.walk); // 함수 그 자체가 출력 된다. () => console.log('깡총깡총')
rabbit.walk(); // 객체의 메서드 호출

console.log(rabbit.address.si); // 객체 출력
console.log(rabbit.address.gu);
console.log(rabbit.address.dong);
console.log(rabbit.address);
console.log(`${rabbit.name}집은 ${rabbit.address.si} ${rabbit.address.gu} ${rabbit.address.dong} 입니다.`);
