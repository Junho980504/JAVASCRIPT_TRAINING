
// 일반 함수

function add(a, b){
    return a + b;
}

const result = add(10, 10);
console.log(`더하기 결과 : ${result}`);

// 화살표 함수
const add2 = (a, b) => {
    return a + b;
}

// 콜백 함수
const add3 = (a, b, callback) => {
    setTimeout(() => {
        const result = a+b;
        callback(null, result);
    }, 500);
    
}


const divide = (a, b, callback) => {
    setTimeout(() =>{
        if (b == 0 ){
            callback(`두번째 값이 없습니다.`, null);
            return;
        }

        const result = a / b ;
    callback(null,result);
    }, 1000);

}
// 에러가 있으면 첫번째 값으로 넣어준다.
divide(100, 10, (err, result) => {
    if(err){
        console.error(`에러 발생 : ${err}`);
        return;
    }
    console.log(`콜백함수 안에서 나누기 결과 : ${result}`)
});


add3(10, 10, (err, result) => {
    if(err){
        console.error(`에러 발생 : ${err}`);
        return;
    }
    console.log(`콜백함수 안에서 더하기 결과  : ${result}`)
    
});

divide(100, 5, (err, result) => {
    if(err){
        console.error(`에러 발생 : ${err}`);
        return;
    }
    console.log(`콜백함수 안에서 나누기 결과 : ${result}`)
    add3(10, 5, (err, result2) => {
        if(err){
            console.error(`에러 발생 : ${err}`);
            return;
        }
        console.log(`콜백함수 안에서 더하기 결과  : ${result2}`)
    });
});

const add4 = (a, b) =>  new Promise((resolve, reject) => {
        add3(a, b, (err, result) => {
            if(err) {
                reject(err);
                return;
            }

            resolve(result);
        })
    })


const divide4 = (a, b) => 
     new Promise((resolve,reject) => {
        divide(a, b, (err, result) => {
            if(err){
                reject(err);
                return;
            }

            resolve(result);
        })
    })


const doCalc = async () => {
    try{
    const result1 = await divide4(200, 10);
    console.log(`나누기 결과 : ${result1}`);
    
    const result2 = await add4(result1, 10);
    console.log(`더하기 결과 : ${result2}`);
    } catch(err){
        console.error(`doCalc에서 에러 발생`)
    }
}
doCalc();