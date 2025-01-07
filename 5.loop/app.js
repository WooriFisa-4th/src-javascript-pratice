for(let index = 0; index < 5; index++) {
    console.log(index);
}

const rainbow = 'rainbow';
console.log(rainbow[0]);
for(let index = 0; index < rainbow.length; index++) {
    console.log(rainbow[index]);
}

const food = ['apple', 'orang-cookie', 'avocado', 'doctor-peppermint'];
let favorite = "내가 좋아하는 음식은.. ";
for(let index = 0; index < food.length; index++) {
    if(index === food.length - 1) {
        favorite += '그리고 '+ food[index];
    } else {
        favorite += food[index] + ', ';
    }
}
console.log(favorite);

const fruits = ['apple', 'banana', 'coconut'];
// 별도의 변수로 두지 않고 인라인으로 작성
fruits.forEach(fruit => console.log(fruit));
console.log("====================================");
// 함수를 변수에 넣을 수 있다.
const fruitPrinter = fruit => console.log(fruit);
fruits.forEach(fruitPrinter);
fruitPrinter('orange');
fruitPrinter(fruits)