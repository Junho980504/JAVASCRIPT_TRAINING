// 변수상자

let name1 = '홍길동1';
let age1 = 21;
console.log(`이름과 나이 : ${name1}, ${age1}`)

const age2 = '10';
const age3 = Number(age2);
console.log(`age2의 크기 : ${typeof(age2)}, age3의 크기 : ${typeof(age3)}`);

// 함수상자

function add(a, b) {
    return a + b;
}

const result = add(10,10);
console.log(`더하기 결과 : ${result}`);

// 화살표 함수로 바꾸기

const add2 = (a, b) => {
    return a + b;
}

// 콜백 함수 사용하기
function add3(a, b, callback) {
    callback(a + b);
}

add(10,10, (result) => {
    console.log(`더하기 결과 : ${result}`);
});
//add4(10, 10, function (result) {
    console.log(`더하기 결과 : ${result}`);
//}
function add5(a,b,callback){
    callback(a+b);
}    
const callback = (result) => {
    console.log(`더하기 결과 : ${result}`);
}
// 붕어빵 만들기
const fish1 = {
    name : '붕어빵1',
    age : 1,
    swim : () => {
        console.log('붕어빵이 헤엄칩니다.')
    }
}

console.log(`fish1의 이름은 : ${fish1.name}, fish1의 나이는 : ${fish1.age}`);

// 붕어빵 틀에서 붕어빵 만들기
class Fish {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 함수상자
    swim() {
        console.log('붕어빵이 헤엄칩니다.');
    }
}


const fish2 = new Fish('붕어빵1', 1);
const fish3 = new Fish('붕어빵2' , 2);

