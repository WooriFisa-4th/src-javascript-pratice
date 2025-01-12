const xhr = new XMLHttpRequest();
// console.log(xhr);

// 2. 서버로 부터 응답이 완료되었는지 확인
// 로드되었을 경우 동작할 이벤트 로직을 함수 형태로 추가

xhr.onload = () => { // 객체가 가진 프로퍼티 기반으로 이벤트 추가
    // 요청처리가 완료이며, 상태 코드(서버처리 상태)가 200인 경우
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        const reponseData = xhr.responseText;
        const parseData = JSON.parse(reponseData);
        console.log(parseData.name);
    }
}

// 3. 실제 요청을 준비하는 코드 (open())
// 요청을 전송할 서버 엔드포인트
const REQUEST_URL = 'https://jsonplaceholder.typicode.com/users/1';
xhr.open('GET', REQUEST_URL);

// 4. 요청을 전송하는 코드 (send())
xhr.send();
