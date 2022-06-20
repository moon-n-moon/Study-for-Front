//3. 변수, 예약어

// 재사용이 가능!
// 변수 선언!

let a = 2;
let b = 5;

console.log(a + b); //7
console.log(a - b); //-3
console.log(a * b); //10
console.log(a / b); //0.4


// 값(데이터)의 재할당 가능!
let c = 12;
console.log(c); //12

c = 999;
console.log(c); //999

// 값(데이터)의 재할당 불가!
const d = 12;
console.log(a); //12

d = 999;
console.log(d); // TypeError: Assignment to constant variable.


// 예약어기 때문에 변수명으로 사용 불가
// let this =  'hello'; // SyntaxError
// let if = 123; // SyntaxError
// let break = true; // SyntaxError
