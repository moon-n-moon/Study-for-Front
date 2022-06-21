//7. DOM API(2)

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
    console.log('Click!!');
    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(
        boxEl.classList.contains('active')
    ); 
});

// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box'); //Selector은  조건에 부합하는 요소들 중 제일 처음 찾은 요소를 반환헀는데 All은 전부 반환한다.
console.log(boxEls); // boxEls는 찾은 모든 요소가 들어있기 때문에 배열의 형태를 가진다.

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl): 반복 중인 요소.
// 두 번재 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력!
boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});