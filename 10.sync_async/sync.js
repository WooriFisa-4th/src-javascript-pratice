function first() {
    console.log('first called()');
}

function second() {
    console.log('second called()');
}

function someLongWrok() {
    let timeout;
    console.log('오래 걸리는 작업 처리중...');
    timeout = setTimeout(() => {
        console.log('오래 걸리는 작업 완료');
    }, 3000);
}

// first();
// someLongWrok();
// second();