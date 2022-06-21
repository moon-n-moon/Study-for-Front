// 6. DOM API

// let boxEl = document.querySelector('.box');

console.log(boxEl);

// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

//인수(Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
    console.log('Click~!');
});

// HTML 요소(Element) 검색/찾기
const boxEl2 = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl2.classList.add('active'); // boxEl2 요소에 active 클래스 추가
let isContains = boxEl2.classList.contains('active'); // contains - boxEl2에 active 클래스가 있는지 여부에 따라 true/false 반환
console.log(isContains); // true 

boxEl2.classList.remove('active');
isContains = boxEl2.classList.contains('active'); // let으로 선언헀기 때문에 재할당 가능
console.log(isContains); //false 

