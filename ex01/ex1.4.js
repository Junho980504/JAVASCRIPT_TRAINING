// 함수상자

function print(){
    console.log('안녕!')
}
print();

function print2(a){
    console.log(`전달받은 값 :  ${a}`)
}
print2(10);

function print3(a, b){
    console.log(`전달받은 값 : ${a}, ${b}`)

    return a + b ;
}
let result = print3(10,10);
console.log(`print3의 결과 : ${result}`);

console.log(`print 함수 상자의 크기 : ${typeof(print)}`);
// 함수상자를 변수상자에 할당 // ()를 붙히면 함수를 실행, ()를 안붙히면 함수 그 자체를 가르킨다.
let show = print;
show();

// 함수상자를 만들면서 바로 변수상자에 할당
let show2 = function(){
    console.log('print4 호출됨.')
}
show2();
// () = > 위에 있는 형태와 같다 // 화살표 함수 형태로 변경
let show3 = () => {
    console.log('print5 호출됨')
}
show3();

// 더하기 함수

function add1(a, b){
    return a + b;
}
let result1= add1(10,10);
console.log(`더하기 결과 : ${result1}`);

// 콜백 함수
function add2(a, b, c){
    c(a + b);
}
add2(10,10, (result) => {
    console.log(`더하기 결과 : ${result}`);
});

function add3(a){
    let result = 0;
    for(let i = 1; i <= 10; i++){

        result += i;
    }
    return a(result);
}
add3((result) =>{
    console.log(`for문 결과 : ${result}`)
})

let sum = 0;
for(let i=0; i < 10; i++){
    sum = sum + (i+1);
}

console.log(`1부터 10까지의 합 : ${sum}`);

let calc = (start, end) =>{
    let sum = 0;
    for(let i=start; i < end; i++){
        sum = sum + (i+1);
    }
    return sum;
}

let calcResult = calc(0,10);
    console.log(`1부터 10까지의 합 : ${calcResult}`);

let calcResult2 = calc(0, 100);
    console.log(`0부터 100까지의 합 : ${calcResult2}`);

    // 3. 콜백함수 형태로 바꾸기
    let calc2 = (start, end, callback) =>{
        let sum = 0;
        for(let i=start; i < end; i++){
            sum = sum + (i+1);
        }
        callback(sum);
    }   

calc2(0, 10, (result) => {
    console.log(`1부터 10까지의 합 : ${calcResult3}`);    
});
