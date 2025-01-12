// function a() {
//     setTimeout(aCallback, 1000);
// }

// function aCallback() {
//     console.log('a() is called');
// }

// function b() {
//     // setTimeout(bCallback, 500);
//     setTimeout(() => {
//         a();
//         console.log('b() is called');
//     }, 500);
// }

// function bCallback() {
//     console.log('b() is called');
// }

// function c() {
//     setTimeout(cCallback, 1200);
// }

// function cCallback() {
//     console.log('c() is called');
// }


// // a();
// b();
// c();
function a( callback ) {
    setTimeout(() => {
        console.log('a() called');
        callback();
    }, 1000);
}

function b( callback ) {
    setTimeout(() => {
        console.log('b() called');
        callback();
    }, 500);
}

function c( callback ) {
    setTimeout(() => {
        console.log('c() called');
        callback();
    }, 1200);
}

a(() => {
    console.log('a() is done');
    b(() => {
        console.log('b() is done');
        c(() => {
            console.log('c() is done');
        });
    });
})

console.log('one');
setTimeout(() => {
    console.log('two');
}
, 0);
console.log('three');