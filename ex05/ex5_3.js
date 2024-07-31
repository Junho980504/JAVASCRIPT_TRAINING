// 웹서버 만들기

const http = require('http');
const express = require('express');
const mariadb = require('mariadb');
const path = require('path');


const pool = mariadb.createPool({
    host: 'localhost',
    port: 4406,
    user: 'root',
    password: 'admin',
    database: 'test',
    connectionLimit: 10,
    debug: false
})

const app = express();

BigInt.prototype.toJSON = () => {
    return this.toString();
}

// 폴더 오픈하기
app.use('/', express.static(path.join(__dirname, 'public')));

const router = express.Router();
app.use('/', router);

// 리스트 요청
router.route('/person/list').get(async (req, res) => {
    console.log('/person/list 요청됨.');
    let conn;
    try {
        conn = await pool.getConnection();

        const sql = `select id, name, age, mobile from test.person`
        const rows = await conn.query(sql, []);
        console.log(`SQL 실행 결과 :  ${JSON.stringify(rows)}`);

        const output = {
            code: 200,
            message: 'OK',
            header: {},
            data: rows
        }
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));

    } catch(err){
        console.error(`에러 발생 : ${err}`);

        const output = {
            code: 400,
            message: `에러 발생 : ${err}`

        }

        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));
    } finally {
        if (conn) { conn.end(); }
    }
   
})

// 추가 요청
router.route('/person/add').get(async (req, res) => {
    console.log('/person/add 요청됨.');
    
    // 요청 파라미터 확인하기
    const params = req.query;
    console.log(`params -> ${JSON.stringify(params)}`);

    let conn;
    try {
        conn = await pool.getConnection();

        const sql = `insert into test.person(name, age, mobile) 
                     values 
                     ('${params.name}', ${params.age}, '${params.mobile}')`;
        const rows = await conn.query(sql, []);
        console.log(`SQL 실행 결과 :  ${JSON.stringify(rows)}`);

        const output = {
            code: 200,
            message: 'OK',
            header: {},
            data: rows
        }
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));

    } catch(err){
        console.error(`에러 발생 : ${err}`);

        const output = {
            code: 400,
            message: `에러 발생 : ${err}`

        }

        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));
    } finally {
        if (conn) { conn.end(); }
    }
   
})

// 삭제 요청
router.route('/person/remove').get(async (req, res) => {
    console.log('/person/remove 요청됨.');
    let conn;
    try {
        conn = await pool.getConnection();

        const sql = `delete from test.person
                     where id = 1`;
        const rows = await conn.query(sql, []);
        console.log(`SQL 실행 결과 :  ${JSON.stringify(rows)}`);

        const output = {
            code: 200,
            message: 'OK',
            header: {},
            data: rows
        }
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));

    } catch(err){
        console.error(`에러 발생 : ${err}`);

        const output = {
            code: 400,
            message: `에러 발생 : ${err}`

        }

        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
        res.end(JSON.stringify(output));
    } finally {
        if (conn) { conn.end(); }
    }
   
})

app.use((req, res, next)=>{
    console.log(`첫번째 미들웨어 호출됨.`)

    next();
})

app.use((req, res, next) => {
    console.log('두번째 미들웨어 호출됨.');

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});
    res.end('<h3>페이지를 찾을 수 없습니다.</h3>');
})



http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨 : 7001`);
})
console.log(`웹서버 실행 요청함`);
