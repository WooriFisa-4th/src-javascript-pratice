
function countRemainCookie(num) {
    return 2 - num;
}

function appendInnerHTML() {
    const option = document.getElementById('cookie').value;
    const result = document.getElementById('result');
    if(option === 'one') {
        const remain = countRemainCookie(1);
        result.innerHTML = `1개 먹어서 ${remain}개가 남았습니다.`;
    } else if(option === 'two') {
        const remain = countRemainCookie(2);
        result.innerHTML = `2개 먹어서 ${remain}개 남았습니다.`;
    } else if(option === 'random') {
        const randomNum = Math.floor(Math.random() * 3);
        const remain = countRemainCookie(randomNum);
        result.innerHTML = `${randomNum}개 먹거라. 남은 쿠키는 ${remain}개야.`;
    } else {
        result.innerHTML = '선택해주세요';
    }    
}

document.getElementById('cookie').addEventListener('change', appendInnerHTML);
