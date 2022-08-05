const {Client} = require('pg')

const conn = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'rtkita',
    password: 'P@ssw0rd',
    port: 5432,

})

conn.connect();

module.exports = conn
// conn.query('select * from residential', (err, res)=>{
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }

//     conn.end;
// })