// DOM -> 객체네?
console.log(typeof document);
// 객체는 프로퍼티를 가지자나
console.dir(document);

// DOM을 통한 HTML 태그 조작
// h1 태그를 id 값으로 가져오기
const h1CalledById = document.getElementById('main-title');
// li 태그를 태그 이름으로 한 번에 전부 가져오기
// const liListCalledByTagName = document.getElementsByTagName('li');
const liListCalledByOnce = document.querySelectorAll('li');
// li 태그를 클래스이름으로 가져오기
const liListCalledByCalssName = document.getElementsByClassName('list-item');
// >> getElement  's' 즉, 's'로 끝나는 메소드는 여러개를 가져옴

console.log(h1CalledById);
console.log(h1CalledById.innerText);
h1CalledById.innerText = 'Hello, DOM!'; // h1 태그의 텍스트 변경
console.log(h1CalledById.innerText);
console.log(liListCalledByOnce);
console.log(liListCalledByCalssName);