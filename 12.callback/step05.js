let g = 0;
function setGwith100() {
    console.log('setGwith100() called');

    setTimeout(() => {
        g = 100;
    }, 1000);
    console.log('setGwith100() is done');
    
    return g;
}
const result = setGwith100();
console.log('result:', result);
console.log('g:', g);