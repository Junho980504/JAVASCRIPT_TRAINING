// 붕어빵 만들기

let name = '홍길동1';
let age = 21;
// 변수와 함수 모두 한 상자안에 넣어놓을 수 있다.
let fish1 = {
    name: '홍길동1', 
    age: 21,
    //속성 
    swim: function (){
        console.log(`붕어빵이 헤엄칩니다.`);
    }
}
// 인스턴스 객체
console.log(`fish1 붕어빵의 이름 : ${fish1.name}`);
fish1.swim();

class Fish {
    
    // this로 자동으로 변수상자가 만들어짐
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    swim(){
        console.log(`붕어빵이 헤엄칩니다.`);
    }

}

let fish2= new Fish('붕어빵1', 1);
console.log(`fish2 붕어빵의 이름 : ${fish2.name}`);