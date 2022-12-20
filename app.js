const express=require("express")
const connection=require("./src/client/connection")
const bodyParser = require('body-parser');
const routes=require('./src/routes')
const app=express()
const cors =require("cors")

const port =3000
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

app.listen(port,()=>{
    console.log("listening on port",port)
})


