var mySql=require("mysql2")
let connection=mySql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306",
    password:"admin123",
    database:"Base"
})

connection.ping(function (err) {
    console.log("hai")
    if (err) throw err;
    console.log('Server responded to ping');
  })

module.exports=connection